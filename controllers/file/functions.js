const fileServices = require('../../services/file');


const uploadFile = async (file) => {
 try {
    let response = await fileServices.uploadFile(file);
    return response
 }
 catch (error){
    return error;
 }
 
}


const getFileData = async(fileId) => {
    try {
        let response = await fileServices.getFileData(file);
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
const getFileList = async (query) => {
    try {
        let response = await fileServices.getFileList(query);
        return response
     }
     catch (error){
        return error;
     }

}

/**
 * 
 * @param {fileId} fileId 
 * @returns file details
 */
const getFileById = async (fileId) => {
    try {
        let response = await fileServices.getFileById(fileId);
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