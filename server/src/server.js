require('dotenv').config()
const https = require('https');
const fs = require('fs');
const express = require('express')

const app = express()
const port = process.argv[2] || 3000

const {
  PATH_TO_KEY,
  PATH_TO_CERT,
} = process.env

const options = {
  key: fs.readFileSync(PATH_TO_KEY),
  cert: fs.readFileSync(PATH_TO_CERT)
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

https
.createServer(options, app)
.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
});
