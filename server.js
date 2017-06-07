const express = require('express')
const app = express()
var PORT = process.env.PORT || 8080;

app.get('/:timestamp', function (req, res) {
    var timestamp = req.param.timestamp;
  res.send('Timestamp: '+timestamp)
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('listening on port 8080....')
})