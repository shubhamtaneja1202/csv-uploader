const express = require('express');
const app = express()
const port = 3000

const routes = require('./routes/file.js');

app.use(routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})