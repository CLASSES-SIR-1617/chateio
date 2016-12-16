// usar a framework express para web apps
var express = require('express');

// criar uma app com base no express
var app = express();


// responder com 'ola mundo' ao pedido get
app.get('/xx', function(req, res){
  res.send('<h1>Ola Mundo</h1>');
});

app.get('/', function(req, res){
  //res.send('<h1>Olé Mundo</h1>');
  var key = {
  	"numbers" : gen(5,1,50),
  	"stars" : gen(2,1,12)
  }
	res.send(key);
});

app.get('/:n/:s', function(req, res){
  //res.send('<h1>Olé Mundo</h1>');
  var key = {
  	"numbers" : gen(req.params.n,1,50),
  	"stars" : gen(req.params.s,1,12)
  }
	res.send(key);
});

function out() {
	 var key = {
  	"numbers" : gen(5,1,50),
  	"stars" : gen(2,1,12)
  	};
  return key;
}

console.log(out());
console.log(gen(5,1,10));

function gen (nn,min,max) {
	if (nn > (max-min + 1)) {console.log("ooo");return;}
	var g = [];
	var i = nn;
	while (i) {
		r = min + Math.floor(Math.random()*(max-min+1));
		console.log(g + "   " + r + "..." + g.indexOf(r));
		if (g.indexOf(r) === -1 ) {
			g.push(r);
			i--;
		}
	}
	return g;
}

// colocar servidor à escuta no porto 3000 (ou o definido pelo sistema)
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  //var addr = app.server.address();
  //console.log("a escutar no endereco", addr.address + ":" + addr.port);
});