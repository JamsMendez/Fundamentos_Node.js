function series (cbs, last) {
  var results = [];
  function next () {
    var cb = cbs.shift();
    if(cb){
      cb(function () {
        results.push(Array.prototype.slice.call(arguments));
        next();
      });
    }else{
      last(results);
    }
  }
  next();
}

function async(arg, cb) {
  // random ms
  var delay = Math.floor(Math.random() * 5 + 1) * 100;
  console.log('async with ' + arg + ' , return in ' + delay + ' ms');
  setTimeout(function() {
     cb(arg * 2);
  }, delay);
}

function final(results) {
  console.log('finish', results);
}

series([
  function(next) { async(1, next); },
  function(next) { async(2, next); },
  function(next) { async(3, next); },
  function(next) { async(4, next); },
  function(next) { async(5, next); },
  function(next) { async(6, next); }
], final);
