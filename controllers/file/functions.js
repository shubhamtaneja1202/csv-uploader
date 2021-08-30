const fileServices = require('../../services/file');


const uploadFile = async (file) => {
 try {
    console.log('file', file );
    let response = await fileServices.uploadFile(file);
    return response;
 }
 catch (error){
    throw error;
 }
 
}


const getFileData = async(req, res) => {
    try {
      console.log('here')
        let response = await fileServices.getFileData(req.params.file_id);
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