const fileControllers = require('../controllers/file');
const routes = require('express').Router();
const multer  = require('multer')
const upload = multer()

routes.post('/file/upload', upload.none(), async(req, res) => {
  try {
    let response = await fileControllers.uploadFile(req);
    res.status(200).send(response);
  }
  catch(err){
    res.status(500).send({message : err.message});
  }
})

// get the data
routes.get('/file/:id', async(req, res) => {
  try {
    let response = await fileControllers.getFileData(req.query.id);
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

routes.get('/file/:id/status', async(req, res) => {
  try {
    let response = await fileControllers.getFileById(req.query.id);
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

// skip=20, limit=10 
// get a list of files
routes.get('/file', async(req, res) => {
  try {
    let response = await fileControllers.getFileList(req.query);
    console.log('response', response)
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

module.exports = routes;