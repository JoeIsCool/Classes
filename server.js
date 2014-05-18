'use strict';

console.log('starting server!');
var stat = require('node-static');
var url = require('url');
var qs = require('querystring');


var basePage = 'html/application.html';

var fileServer = new stat.Server('.', {
  cache: false,
  headers: '{"Cache-Control": "no-cache, no-store, must-revalidate","Pragma": "no-cache","Expires":0}'
});

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    var path = url.parse(request.url).pathname;
    console.log('path: ' + path);
    if (!path || path == '/') {
      fileServer.serveFile(basePage, 500, {}, request, response);
      console.log('serve basePage');

    } else {
      fileServer.serve(request, response);
      console.log('file served');
    }

  }).resume();
}).listen(8080);
console.log('server running!');
