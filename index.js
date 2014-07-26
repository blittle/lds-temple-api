var express = require('express');
var winston = require('winston');
var dateFormat = require('dateformat');

var app = express();
var now = new Date();

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: dateFormat(now, "ddmmyyyy") + '.log' })
    ]
});

var temples = require('./temples');

app.get('/temples', function(req, res){
    logger.info('GET /temples');

    res.send(JSON.stringify(
    {
      "current_page": 1,
      "total_pages": 1,
      "total_items": temples.length,
      "photos": temples
    }
  ));
});

var server = app.listen(8080, function() {
    console.info('Listening on port %d', server.address().port);
});