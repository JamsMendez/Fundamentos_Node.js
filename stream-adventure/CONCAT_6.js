var concat = require('concat-stream');

var con = concat(write);

process.stdin.pipe(con);

function write (buffer) {
  var chars_string = buffer.toString();
  var rev_string = reverse(chars_string);
  console.log(rev_string);
}

function reverse(s){
    return s.split("").reverse().join("");
}

/*
  var concat = require('concat-stream');

  process.stdin.pipe(concat(function (src) {
      var s = src.toString().split('').reverse().join('');
      console.log(s);
  }));

*/
