var fs = require('fs');

//var path = '/path/to/file';
var path = process.argv[2];
fs.readFile(path, function (err, buffer_file) {
  if(!err){	
    var string_file = buffer_file.toString('utf8');

    var lines = string_file.split('\n');
    var number_lines = lines.length - 1;

    console.log(number_lines);
  }else{
    console.info(err);
  }
});
