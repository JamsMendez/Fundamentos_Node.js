var split   = require('split');
var through = require('through');

var pair = false;

process.stdin
.pipe(split())
.pipe(through(function (buffer) {
    var line_string = buffer.toString();
    if(pair){
      line_string = line_string.toUpperCase();
      pair = false;
    }else{
      line_string = line_string.toLowerCase();
      pair = true;
    }
    console.log(line_string);
}));

/*
  var through = require('through');
  var split = require('split');

  var lineCount = 0;
  var tr = through(function (buf) {
      var line = buf.toString();
      this.queue(lineCount % 2 === 0
          ? line.toLowerCase() + '\n'
          : line.toUpperCase() + '\n'
      );
      lineCount ++;
  });
  process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
*/
