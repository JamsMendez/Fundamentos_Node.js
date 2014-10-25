
function async(args_, cb) {
}

function final() {
  console.log('finish');
}

// A simple async series:
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
function series(item) {
  if(item) {
    async( item, function(result) {
      results.push(result);
      series(items.shift());
    });
  } else {
    final();
  }
}

series(items.shift());
