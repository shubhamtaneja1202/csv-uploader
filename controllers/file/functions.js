const fileServices = require('../../services/file');


const uploadFile = async (req, res) => {
 try {
    let response = await fileServices.uploadFile(req.body);
    return response
 }
 catch (error){
    throw new Error(error);
 }
 
}


const getFileData = async(req, res) => {
    try {
        let response = await fileServices.getFileData(req.params.file_id);
        return response
     }
     catch (error){
        throw new Error(error);
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
        return response
     }
     catch (error){
        throw new Error(error);
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
        throw new Error(error);
     }
  
}

module.exports = {
    uploadFile,
    getFileById,
    getFileList,
    getFileData
}