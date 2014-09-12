var http = require('http');
var Server = http.createServer(function (request, response) {
 processRequest(request, response);
});

Server.listen(5000, function () {
 console.log("Server ON");
 console.log(Server);
});


function processRequest(request, response) {
   var body = 'hello world';
   response.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'text/plain' 
   });
   response.write(body, 'utf-8');
}
