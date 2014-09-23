var http = require('http');

var through = require('through');

var server = http.createServer(function (request, response) {
  if(request.method == 'POST'){
    var thr = through(write, end);
    request.pipe(thr).pipe(response);
  }else{
    response.end('finish, method is not POST');
  }
});

server.listen(process.argv[2]);

function write (buffer) {
  var string_input = buffer.toString();
  this.queue(string_input.toUpperCase());
}

function end () {
  this.queue(null);
}


/*

  var http = require('http');
  var through = require('through');

  var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
      req.pipe(through(function (buf) {
        this.queue(buf.toString().toUpperCase());
      })).pipe(res);
    }
    else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));

*/
