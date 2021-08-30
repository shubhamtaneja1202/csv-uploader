const fileControllers = require('../controllers/file');
const routes = require('express').Router();
const multer  = require('multer')
const upload = multer()

// upload a file
routes.post('/file/upload',  upload.none(), fileControllers.uploadFile)
  
  // get the data
routes.get('/file/:file_id', fileControllers.getFileData)
  
routes.get('/file/:file_id/status', fileControllers.getFileById)
  
  // skip=20, limit=10 
  // get a list of files
routes.get('/file', fileControllers.getFileList)

module.exports = routes;