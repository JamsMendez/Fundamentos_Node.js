var http = require('http');
var qs = require('querystring');

var PORT = process.argv[2];

var server = http.createServer(function (req, res) {
  if(req.method == 'POST'){
    var body = '';

    req.on('data', function (data) {
      body = body + data;
    });

    req.on('end', function () {
      res.writeHead(200);
      res.end(body.toUpperCase());
    })

  }else{
    res.writeHead(400);
    res.end('not found');
  }
});

server.listen(PORT);

/*

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))

*/
