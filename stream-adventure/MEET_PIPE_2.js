var fs = require('fs');

var file = process.argv[2];

var readable = fs.createReadStream(file, { encoding: 'utf8' });

readable.on('data', function (buffer) {
  var stream = buffer.toString();
  console.log(stream);
});

readable.on('end', function () {
  //console.log("finish");
});


/*

 var fs = require('fs');
 var file = process.argv[2];
 fs.createReadStream(file).pipe(process.stdout);

*/
