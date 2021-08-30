const fileControllers = require('../controllers/file');
const routes = require('express').Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

routes.post('/file/upload', upload.single('file'), async(req, res) => {
  try {
    const response = await fileControllers.uploadFile(req.file);
    res.status(200).send(response);
  }
  catch(err){
    console.log('error', err)
    res.status(500).send({message : err.message});
  }
})

// get the data
routes.get('/file/:id', async(req, res) => {
  try {
    const response = await fileControllers.getFileData(req.params.id);
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

routes.get('/file/:id/status', async(req, res) => {
  try {
    const response = await fileControllers.getFileById(req.params.id);
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
    const response = await fileControllers.getFileList(req.query);
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

module.exports = routes;