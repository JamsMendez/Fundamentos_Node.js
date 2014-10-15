var crypto = require('crypto');

var input = process.argv[2];

var stream = crypto.createDecipher('aes256', input);
process.stdin
.pipe(stream)
.pipe(process.stdout);

/*

var crypto = require('crypto');
process.stdin
.pipe(crypto.createDecipher('aes256', process.argv[2]))
.pipe(process.stdout);

*/
