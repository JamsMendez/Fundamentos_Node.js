var http = require('http');
var fs   = require('fs');

var PORT = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (req, res) {
  var content_file = '';
  var readable = fs.createReadStream(path, { encoding: 'utf8' });

  readable.on('data', function(buffer) {
    content_file = content_file + buffer.toString();
  })

  readable.on('end', function() {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end(content_file);
  });

});

server.listen(PORT);

/*

  var http = require('http')
  var fs = require('fs')

  var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
  })

  server.listen(Number(process.argv[2]))

*/
