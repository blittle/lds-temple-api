var express = require('express');
var app = express();

var temples = require('./temples');

app.get('/temples', function(req, res){
  res.send(JSON.stringify(temples));
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});