/*exports.function_name = function () {
  return 'function_name...';
}*/

/*module.exports.function_name = function () {
 return 'function_name';
}*/

/*
if (__dirname)  console.log('__dirname');
if (__filename) console.log('__filename');
if (require.main) console.log('require.main');
if (module) console.log('module');
*/

module.exports = function () {
  
  function function_private () {
    return 'function_private';
  }   

  this.function_name = function () {
    return 'function_name';
  }

  if (__dirname)  console.log('__dirname');
  if (__filename) console.log('__filename');
  if (require.main) console.log('require.main');
  if (module) console.log('module');

}
