var spawn  = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function (cmd, args) {

  var grep = spawn(cmd, args);
  return duplex(grep.stdin, grep.stdout);
  
}
