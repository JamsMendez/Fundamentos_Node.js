function async (arg, cb) {
  console.log('do something with ' + arg + ' return 2 sec later');
  setTimeout(function () {
    cb(arg * 2);
  }, 2000);
}

function final () {
  console.log('finish ', results);
}

var items   = [1, 2, 3, 4, 5];
var results = [];
var running = 0;
var limit = 2;

function launcher () {
  while(running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function (result) {
      results.push(result);
      running--;
      if(items.length > 0){
        launcher();
      }else if (running === 0) {
        final();
      }
    });
    running++;
  }
}

launcher();
