var net = require('net');

var PORT = process.argv[2];

var server = net.createServer(function (socket) {

  var data = returnDate();

  socket.write(data + '\n', function () {
   socket.end();
  });

  socket.pipe(socket);

});


server.listen(PORT, function () {
  //console.log('listen port ' + PORT);
});

function returnDate () {
  var date = new Date();
  var year  = date.getFullYear();
  var month = date.getMonth();
  var day   = date.getDate();
  var hr    = date.getHours();
  var min   = date.getMinutes();

  month = month + 1;

  if(month < 10){
    month = '0' + month;
  }

  if(min < 10){
    min = '0' + min;
  }

  var date_str = year + '-' + month + '-' + day + ' ' + hr + ':' + min;
  return date_str;
}


/*

  var net = require('net')

  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }

  function now () {
    var d = new Date()
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
  }

  var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
  })

  server.listen(Number(process.argv[2]))

*/
