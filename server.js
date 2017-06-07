const express = require('express')
const app = express()

app.get('/:timestamp', function(request, response) {
	var timestamp = request.params.timestamp;
	response.json(getTimestampJSON(timestamp));
});

function getTimestampJSON(timestamp){
    
    var result={
        unix:null,
        natural:null
    }
    var date;
    if(!isNaN(parseInt(timestamp))){
        date = new Date(parseInt(timestamp))
        console.log("date: "+ date)
    }else{
        date= new Date(timestamp)
        console.log("date2: "+date)
    }
    if(!isNaN(date.getTime())){
        console.log(date.getTime())
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