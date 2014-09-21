var through = require('through');

var tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);

function write (buffer) {
  var chars_string = buffer.toString();
  var upper_string = chars_string.toUpperCase();
  this.queue(upper_string);
}

function end () {
  this.emit('end');
}

/*
  var through = require('through');
  var tr = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
  });

  process.stdin.pipe(tr).pipe(process.stdout);
*/
