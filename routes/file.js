const controllers = require('../controllers');


// upload a file
app.post('/file/upload', async(req, res) => {
    try {
      let response = await controllers.uploadFile(file);
      res.status(200).send(response);
    }
    catch(err){
      res.status(500).send({message : err.message});
    }
  })
  
  // get the data
  app.get('/file/:id', async(req, res) => {
    try {
      let response = await controllers.getFileData(req.query.id);
      res.status(200).send({data : response, message : null});
    }
    catch(err){
      res.status(500).send({message : err.message,data: null});
    }
  })
  
  app.get('/file/:id/status', (req, res) => {
    try {
      let response = await controllers.getFileById(req.query.id);
      res.status(200).send({data : response, message : null});
    }
    catch(err){
      res.status(500).send({message : err.message,data: null});
    }
  })
  
  // skip=20, limit=10 
  // get a list of files
  app.get('/file', (req, res) => {
    try {
      let response = await controllers.getFileList(req.query);
      res.status(200).send({data : response, message : null});
    }
    catch(err){
      res.status(500).send({message : err.message,data: null});
    }
  })