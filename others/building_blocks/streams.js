// Readable streams
var fs = require('fs');

/*fs.createReadStream
  events: err, data, end
  methods: pause(), resume(), destroy()
*/

var file = fs.createReadStream('events.js');

file.on('err', function (err) {
  console.log('Error ', err);
  throw err;
});

file.on('data', function (data) {
  console.log('Data: ', data);
  //parseString(data);
});

file.on('end', function () {
  console.log('finish reading all of the data');
});


function parseString (buffer){
  var chars = buffer.toString();
  console.log(chars);
}

//Writable streams
var filew = fs.createWriteStream('out.js');

process.stdin.on('data', function (data) {
  filew.write(data);
});

process.stdin.on('end', function () {
  filew.end();
});

// stdin in paused by defaul
process.stdin.resume();

// Using pipe
process.stdin.pipe(fs.createWriteStream('out.js'));
process.stdin.resume();
