const express = require('express');
const app = express()
const port = 3000


const routes = require('./routes/file.js');

app.use(routes);

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})