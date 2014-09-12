var filter = require('./MAKE_IT_MODULAR_6_M');

var args = process.argv;
var dir  = args[2];
var file_ext  = args[3];

filter(dir, file_ext, function (err, files) {
  if(!err){
    for (var i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }else{
    console.log(err);
  }
});
