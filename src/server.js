require('dotenv').config()
const https = require('https');
const fs = require('fs');

const {
  PATH_TO_KEY,
  PATH_TO_CERT,
} = process.env

const express = require('express')
const app = express()
const port = process.argv[2] || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const options = {
  key: fs.readFileSync(PATH_TO_KEY),
  cert: fs.readFileSync(PATH_TO_CERT)
};

https
.createServer(options, app)
.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
});