const express = require('express');
let functions = require('./functions');
const app = express()
const port = 3000

// upload a file
app.post('/file/upload', async(req, res) => {
  try {
    let response = await functions.uploadFile(file);
    res.status(200).send(response);
  }
  catch(err){
    res.status(500).send({message : err.message});
  }
})

// get the data
app.get('/file/:id', async(req, res) => {
  try {
    let response = await functions.getFileData(req.query.id);
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

app.get('/file/:id/status', (req, res) => {
  try {
    let response = await functions.getFileById(req.query.id);
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
    let response = await functions.getFileList(req.query);
    res.status(200).send({data : response, message : null});
  }
  catch(err){
    res.status(500).send({message : err.message,data: null});
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})