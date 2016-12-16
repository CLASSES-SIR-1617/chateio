// usar a framework express para web apps
var express = require('express');

// criar uma app com base no express
var app = express();

// usar um servidor http
var http = require('http');

// criar um servidor http para a app/router
var server = http.createServer(app);

var socketio = require('socket.io');
io = socketio.listen(server);


io.on("connection", function (socket) {
	console.log("ja tenho + uma ligacao");
	socket.on("chat", function (data) {
		console.log(data);
		// socket.broadcast
		io.emit("newchat",data)
	})
	socket.on("disconnect", function () {
		console.log("desligou-se");
	})
});


// responder com 'ola mundo' ao pedido get
app.get('/', function(req, res){
  res.send('<h1>Ola Mundo</h1>');
});

app.get('/ole', function(req, res){
  res.send('<h1>Olé Mundo</h1>');
});

// usar o módulo path (utilidades de caminhos) 
var path = require('path');
// usar o servidor de static do express
app.use(express.static(path.resolve(__dirname, 'static')));

// colocar servidor à escuta no porto 3000 (ou o definido pelo sistema)
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("a escutar no endereco", addr.address + ":" + addr.port);
});