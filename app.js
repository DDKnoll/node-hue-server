var express = require('express');
var app = express();


app.get('/', function(req, res){
  var body = 'This is the entry point for the Hue Controller.';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(4000);
console.log('Listening on port 4000');