var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const path = require('path');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 


router.get('/editor', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});

router.get('/auth', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

//router.post('/')

app.use('/', router);
app.use(express.static(__dirname));

app.listen(3010, function(){
    console.log('API Server started');
})