function async (arg, cb) {
  console.log('do something with ' + arg + ' return 2 sec later');
  setTimeout(function () {
    cb(arg * 2);
  }, 2000);
}

function final () {
  console.log('finish', results);
}

var items = [1, 2, 3, 4, 5];
var results = [];

items.forEach(function (item) {
  async(item, function (result) {
    results.push(result);
    if(results.length == items.length){
      final();
    }
  });
});
