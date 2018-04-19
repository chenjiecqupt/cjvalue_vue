
var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
/*var socket =  io.connect('/');*/
server.listen(3008);

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
console.log('项目运行在localhost:3008');
io.sockets.on('connection', function (socket) {
  socket.emit('news', "hello websocket ！ 基于node websoket.io模块");
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('SendMessage',function (msg) {
    console.log('客户发送数据：'+msg);
    socket.emit('SendMessage',{"msg":msg,"date":new Date()});
    socket.broadcast.emit('SendMessage',{"msg":msg,"date":new Date()})
  })
});

module.exports = app;
