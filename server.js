const express = require('express')
const app = express()
var PORT = process.env.PORT || 8080;

app.get('/:timestamp', function (req, res) {
    var timestamp = req.param.timestamp;
    res.json(getTimestampJSON(timestamp))
//   res.send('Timestamp: '+timestamp)
})

function getTimestampJSON(timestamp){
    
    var results={
        unix:null;
        natural:null;
    }
    var date;
    if(!isNAN(parseInt(timestamp))){
        date = new Date(parseInt(timestamp))
    }else{
        date= new Date(timestamp)
    }
    if(!isNaN(date.getTime())){
        result.unix = date.getTime()
        result.natural  = null;
    }
    return result;
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('listening on port 8080....')
})