var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();



router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});

app.use('/', router);
app.use(express.static(__dirname));

app.listen(3010, function(){
    console.log('API Server started');
})