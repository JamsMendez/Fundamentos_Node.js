var fs = require('fs');

//var path = '/path/to/file';
var path = process.argv[2];
var buffer_file = fs.readFileSync(path);
var string_file = buffer_file.toString('utf8');

var lines = string_file.split('\n');
var number_lines = lines.length - 1;

console.log(number_lines);
