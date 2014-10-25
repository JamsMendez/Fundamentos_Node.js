// Buffers http://nodejs.org/api/buffer.html

// Create a Buffer of 10 bytes
var buffer = new Buffer(10);
buffer[0] = 255;
console.log(buffer);

// create a buffer containing “Good day!” in Finnish
var buffer = new Buffer('Hyvää päivää!');
// create a string containing “Good day!” in Finnish
var str = 'Hyvää päivää!';
// log the contents and lengths to console
console.log(buffer);
console.log('Buffer length:', buffer.length);
console.log(str);
console.log('String length:', str.length);
