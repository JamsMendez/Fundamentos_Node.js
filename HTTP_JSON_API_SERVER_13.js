var http = require('http');
var url = require('url');

var PORT = process.argv[2];

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true);
  var route = urlObj.pathname;

  if(route == '/api/parsetime'){
    var params = urlObj.query;
    var date = new Date(params.iso);
    var time = {};
    time.hour = date.getHours();
    time.minute = date.getMinutes();
    time.second = date.getSeconds();
    var json = JSON.stringify(time);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);

  }else if(route == '/api/unixtime'){
    var params = urlObj.query;
    var date = new Date(params.iso);
    var time = {};
    time.unixtime = date.getTime();
    var json = JSON.stringify(time);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  }else{
    res.writeHead(400);
    res.end('url not found');
  }
});

server.listen(PORT);

/*

  var http = require('http')
  var url = require('url')

  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }

  function unixtime (time) {
    return { unixtime : time.getTime() }
  }

  var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
      result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
      result = unixtime(time)

    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  server.listen(Number(process.argv[2]))

*/
