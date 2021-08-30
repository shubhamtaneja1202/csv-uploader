const db = require('../../utils/db').getConnection();
const fs = require('fs')
const csv = require('csvtojson');
const file = require('.');
const status = {
    INITIALIZED : 0,
    FAILED : -1,
    SUCCESS : 1
}


const uploadFile = async (file) => {
 // initialize the request
 try {
    let requestData = [file.name,status.INITIALIZED,]
    let request = await db.query('INSERT INTO csv_requests(file_name, status) values (?,?)',[requestData]);
    
    // initiate the uploadFileJob
    file.id = request.id;
    uploadFileJob(file); 
    
    // return file id
    return request.id
 }
 catch (error){
    throw err;
 }
 
}

const updateFileStatus = async(fileId, value) =>{
    try {
        let requestData = [status[value],fileId]
        await db.query('UPDATE csv_requests set status = ? where file_id = ?',requestData); 
        return true;
    }
    catch(err){
        throw err;
    }

}

const uploadFileJob = async (file) => {
    await db.beginTransaction();
    try {
        let rows = [];
        let values = [];
        let hashmap = {};
        let sql = 'INSERT INTO header_data(header_id,value,row) values ';
        let insertSQL = ''
        
        // parse the csv file
        rows = await csv().fromString(file);
        let firstRow = rows[0];
        for(let key in firstRow){
            headerData = [file.id, key]
            let result = await db.query('insert into file_headers(file_id, header) values (?,?)', headerData);
            hashmap[firstRow[key]] = result.id;
        }

        for(let index in rows){
            for(let key in rows[index]){
                values.push(hashmap[row[key]],row[key],index);
                if(!insertSQL){
                    insertSQL = ' (?,?)';
                    continue;
                }
                insertSQL = insertSQL + ' ,(?,?)';
            }
        }
        
        // insert values
        if(values.length){
            sql = sql + insertSQL;
            await db.query(sql,values);
        }
        
        await updateFileStatus(file.id,'SUCCESS');
        db.commit();
        return true;
    }
    catch(err){
        db.rollback();
        await updateFileStatus(file.id,'FAILED');
        throw err;
    }   
}


const getFileData = async(fileId) => {
    try {
        // get file data from csv_requests
        query = `select hd.row, fh.header, hd.value  from file_headers fh left join header_data hd 
        on fh.id = fd.header_id where fh.Id = ?
        group by row,header_id`;

        let response = await db.query(query,[fileId]);
        let result = []
        // manupulate the data
        for (let resp of response){
        if(!result[resp.row]){
            result[resp.row] = {}
        }
        result[resp.row][resp.header] = resp.value;
        }
            return result;
    }
    catch(err){
        throw err;
    }

}

/**
 * 
 * @param {query params} 
 * @returns file list
 */
const getFileList = async (query) => {
    try {
        let sql = `select * from csv_requests`;
        let params = [];
        if(query.fileId){
            sql += ` where file_name = ?`;
            params.push(query.fileId);
        }
        if(query.skip && query.limit){
            sql += ` limit ?,?`;
            params.push(query.skip, query.limit);
        }
       console.log('connection',db)
       let files = await db.query(sql,params);
       console.log('files',files);
       return files;
    }
    catch(err){
        throw err;
    }

}

/**
 * 
 * @param {fileId} fileId 
 * @returns file details
 */
const getFileById = async (fileId) => {
    try {
        if(!fileId){
            throw new Error({ message : 'fileName is required'});
        }
        let fileData = await getFileList({fileId})
        return fileData;
    }
    catch(err){
        throw err
    }
  
}

module.exports = {
    uploadFile,
    getFileById,
    getFileList,
    getFileData
}