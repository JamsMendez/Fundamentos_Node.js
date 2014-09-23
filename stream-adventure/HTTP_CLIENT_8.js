var request = require('request');
var through = require('through');

var thr = through(write, end);

process.stdin.pipe(thr);

function write (buffer) {
  var string_input = buffer.toString();
  var req = request.post('http://localhost:8000').form(string_input);
  req.pipe(process.stdout);
}

function end () {
  //console.log('finish');
}


/*
  var request = require('request');
  var r = request.post('http://localhost:8000');
  process.stdin.pipe(r).pipe(process.stdout);

*/
