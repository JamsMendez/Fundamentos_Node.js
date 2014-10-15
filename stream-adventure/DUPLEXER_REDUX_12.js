var duplex = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var counts = {};

  function write (obj) {
    var country = obj.country;
    if(counts[country]){
      counts[country]++;
    }else{
      counts[country] = 1;
    }
  }

  function end () {
    counter.setCounts(counts);
  }

  return duplex(through(write, end), counter);

}


/*
  var duplexer = require('duplexer');
  var through = require('through');

  module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer(input, counter);

    function write (row) {
        counts[row.country] = (counts[row.country] || 0) + 1;
    }
    function end () { counter.setCounts(counts) }
  };

*/
