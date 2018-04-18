
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
/*var socket =  io.connect('/');*/
server.listen(3008);


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
console.log('项目运行在localhost:3008');
io.sockets.on('connection', function (socket) {
  socket.emit('news', "hello websocket ！ 基于node websoket.io模块");
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('login',function (msg) {
    console.log('客户发送数据：'+msg);
    socket.emit('login',{"msg":msg,"date":new Date()});
    socket.broadcast.emit('login',{"msg":msg,"date":new Date()})
  })
});

module.exports = app;
