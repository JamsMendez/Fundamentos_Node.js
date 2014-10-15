var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var element = tr.select('.loud').createStream();
element
.pipe(through(function (buffer) {
  var input_string = buffer.toString();
  this.queue(input_string.toUpperCase());
})).pipe(element);

process.stdin.pipe(tr).pipe(process.stdout);

/*
  var trumpet = require('trumpet');
  var through = require('through');
  var tr = trumpet();

  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf) {
      this.queue(buf.toString().toUpperCase());
  })).pipe(loud);

  process.stdin.pipe(tr).pipe(process.stdout);

*/
