var http = require('http');

var args = process.argv;
var url = args[2];
http.get(url, resHttp);

function resHttp (res) {
  
  res.on('err', function (e) {
    console.log(e);
  });

  res.on('data', function (buffer) {
    var content = buffer.toString('utf8');
    		 
    console.log(content);
  });

  res.on('end', function (data) {
   //console.log('response Ok');
  });

}

/*

  var http = require('http')
    
  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  });


*/
