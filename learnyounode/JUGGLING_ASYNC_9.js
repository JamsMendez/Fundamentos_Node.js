var http = require('http');

var args_cmd = process.argv;

function async(args_, cb) {
  http.get(args_, function (response){
    var content_res = '';

    response.on('data', function (buffer) {
      content_res = content_res + buffer.toString();
    });

    response.on('err', function (err) {
      cb(err);
    });

    response.on('end', function () {
      cb(content_res);
    })

  });
}

var urls = [
            args_cmd[2],
            args_cmd[3],
            args_cmd[4]
          ];

function series(item) {
  if(item) {
    async(item, function(res) {
      console.log(res);
      series(urls.shift());
    });
  }
}

series(urls.shift());



/*

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)

*/
