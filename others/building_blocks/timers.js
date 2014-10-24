/*
  setTimeout(function () {
    // content
  }, delay);

  clearTimeout(timeoutId);

  setInterval(function () {
    // content
  }, delay);

  clearInterval(intervalId);
*/

// setting a timeout
setTimeout(function() {
  console.log('Timeout');
}, 1000);

// Setting and clearing an interval
var counter = 0;
var interval = setInterval( function() {
  console.log('Interval ', counter);
  counter++;
  if (counter >= 3) {
    clearInterval(interval);
  }
}, 1000);
