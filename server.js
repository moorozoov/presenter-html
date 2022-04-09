var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path');
const router = express.Router();

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//Event Listener
const EventListenerFunc = () => {
 console.log('an event occurred!');
}

//Registering the event with the listener
myEmitter.on('eventName', EventListenerFunc);

//Emitting the event 
//myEmitter.emit('eventName');

var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.on('testEvent', function () {
    return console.log('responded to testEvent');
  });

router.get('/editor', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

//router.post('/')

app.use('/', router);
app.use(express.static(__dirname));

MongoClient.connect('mongodb://localhost:27017/presenterdb', function (error, database){
    if (error)
        return console.log(error);
    db = database;
    app.listen(3010, function(){
        console.log('API Server started with database');
    })
})

io.on('click', (data) => {
    console.log("An element clicked")
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


