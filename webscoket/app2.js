/**
 * Created by chenjie on 2018/4/18.
 */
var net = require('net');
var fs = require('fs');

// read crossdomain.xml file
var xmlFile = fs.readFileSync(__dirname +'/crossdomain.xml', 'utf8');

// this server runs on 843
var application = net.createServer(function(socket) {

  socket.setEncoding('utf8');
  socket.emit('news', { hello: 'world' });
  socket.on('data', function(data) {
    try{
      socket.end(xmlFile, 'utf8');
    }catch(e){

    }
  });
  socket.on('login',function (data) {
    console.log('客户发送数据：'+data);
    socket.emit('login','服务器返回：'+data+'     '+new Date())
  });
  socket.on('end', function() {
    socket.end();
  });

  socket.on('error', function(err) {
    if (socket) {
      socket.end();
      socket.destroy();
    }
  });

}).listen(3009,function () {
  console.log('运行在3009端口！')
});
