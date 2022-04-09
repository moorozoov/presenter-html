var express = require('express');
var app = express();
app.get('/', function (request, response){
    response.send('Hello API');
})

app.listen(3010, function(){
    console.log('API Server started');
})