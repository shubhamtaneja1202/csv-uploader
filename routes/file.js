const fileControllers = require('../controllers/file');
const routes = require('express').Router();

// upload a file
routes.post('/file/upload', fileControllers.uploadFile)
  
  // get the data
routes.get('/file/:id', fileControllers.getFileData)
  
routes.get('/file/:id/status', fileControllers.getFileById)
  
  // skip=20, limit=10 
  // get a list of files
routes.get('/file', fileControllers.getFileList)

module.exports = routes;