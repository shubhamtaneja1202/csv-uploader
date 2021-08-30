const fileServices = require('../../services/file');


const uploadFile = async (file) => {
 try {
    // validation
    if(file){
       throw new Error('file is required');
    }
    let response = await fileServices.uploadFile(file);
    return response;
 }
 catch (error){
    throw error;
 }
 
}


const getFileData = async(fileId) => {
    try {
         // validation
         if(fileId){
            throw new Error('fileId is required');
         }
        let response = await fileServices.getFileData(fileId);
        return response;
     }
     catch (error){
        throw error;
     }

}

/**
 * 
 * @param {query params} 
 * @returns file list
 */
const getFileList = async (query) => {
    try {
        let response = await fileServices.getFileList(query);
        return response;
     }
     catch (error){
        throw error;
     }

}

/**
 * 
 * @param {fileId} fileId 
 * @returns file details
 */
const getFileById = async (fileId) => {
    try {
         if(fileId){
            throw new Error('fileId is required');
         }
        let response = await fileServices.getFileById(fileId);
        return response;
     }
     catch (error){
        throw error;
     }
  
}

module.exports = {
    uploadFile,
    getFileById,
    getFileList,
    getFileData
}