function parallel(cbs, last) {
  var results = [];
  var result_count = 0;
  cbs.forEach(function(cb, index) {
    cb( function() {
      results[index] = Array.prototype.slice.call(arguments);
      result_count++;
      if(result_count == cbs.length) {
        last(results);
      }
    });
  });
}


function async(arg, cb) {
  // random sec
  var delay = Math.floor(Math.random() * 5 + 1) * 1000;
  console.log('async with ' + arg +' , return in ' + delay + ' ms');
  setTimeout(function() {
    cb(arg * 2);
  }, delay);
}

function final(results) {
  console.log('finish', results);
}

parallel([
  function(next) { async(1, next); },
  function(next) { async(2, next); },
  function(next) { async(3, next); },
  function(next) { async(4, next); },
  function(next) { async(5, next); },
  function(next) { async(6, next); }
], final);
