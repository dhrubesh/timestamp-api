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
        
        result.natural  = getNaturalDate(date);
    }
    return result;
}

function getNaturalDate(date){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];
    
    console.log(months[date.getMonth()]);
    
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

app.get('/', function (req, res) {
  res.send('Use a timestamp or natural date as path parameter to get the timestamp object e.g.: /October%201,%202016 or /1477473583462')
})

app.listen(8080, function () {
  console.log('listening on port 8080....')
})