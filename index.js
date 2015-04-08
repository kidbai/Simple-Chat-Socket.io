var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname, 'public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket){
  console.log('a user connected');
  socket.on('disconnect', function (){
    console.log('a user disconnect');
  });
  socket.on('send message', function (msg){
    io.emit('send message', msg);
    console.log(msg);
  });

});

http.listen(3000, function(){
  console.log('listen at port 3000');
});