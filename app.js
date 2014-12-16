var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world');
});

app.get('/test', function(req, res){
	res.send('test');
});

app.listen(process.env.PORT || 3000);


module.exports = app;
