const fileServices = require('../../services/file');


const uploadFile = async (req, res) => {
 try {
    let response = await fileServices.uploadFile(req.body);
    return response
 }
 catch (error){
    return error;
 }
 
}


const getFileData = async(req, res) => {
    try {
        let response = await fileServices.getFileData(req.params.file_id);
        return response
     }
     catch (error){
        return error;
     }

}

/**
 * 
 * @param {query params} 
 * @returns file list
 */
const getFileList = async (req, res) => {
    try {
        let response = await fileServices.getFileList(req.query);
        return response
     }
     catch (error){
        console.log('error', error)
        return error;
     }

}

/**
 * 
 * @param {fileId} fileId 
 * @returns file details
 */
const getFileById = async (req, res) => {
    try {
        let response = await fileServices.getFileById(req.params.fileId);
        return response
     }
     catch (error){
        return error;
     }
  
}

module.exports = {
    uploadFile,
    getFileById,
    getFileList,
    getFileData
}