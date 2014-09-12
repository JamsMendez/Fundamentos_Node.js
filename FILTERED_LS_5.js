var fs = require('fs');
var path = require('path');

//var path_dir = '';
var ext = '.md';
var path_dir = process.argv[2];
fs.readdir(path_dir, function (err, files) {
  if(!err){
    for(var i = 0; i < files.length; i++){
     var extname = path.extname(files[i]);
     if(ext == extname){
      console.log(files[i]);
     }
    }
  }else{
    console.info(err); 
  }
});
