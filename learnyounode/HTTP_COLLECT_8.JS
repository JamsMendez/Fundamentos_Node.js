var http = require('http');

var url = process.argv[2];

http.get(url, function (res) {
 var chars_res = '';
 res.on('data', function (buffer) {
   chars_res = chars_res + buffer.toString('utf8');
 });

 res.on('error', function (err) {
   console.log(err);
 });

 res.on('end', function () {
   console.log(chars_res.length);
   console.log(chars_res);
 });

});


/*

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
});

*/
