var express = require('express');
var app = express();

var temples = require('./temples');

app.get('/temples', function(req, res){
  res.send(JSON.stringify(
        {
          "current_page": 1,
          "total_pages": 284,
          "total_items": 11352,
          "photos": temples
        }
    ));
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});