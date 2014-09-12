var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function (err, files) {
    if (!err) {
      var filters = [];
      for (var i = 0; i < files.length; i++) {
        var extname = path.extname(files[i]);
        extname = extname.replace('.', '');
        if(extname == ext){
          filters.push(files[i]);
        }
      }
      cb(null, filters);
    }else {
      cb(err);
    }
  });
}

/*
function filterFiles (cb) {
  fs.readdir(args[2], function (err, files) {
    if (!err) {
      var filters = [];
      for (var i = 0; i < files.length; i++) {
        var ext = path.extname(files[i]);
        if(ext == args[3]){
          filters.push(files[i]);
        }
      }
      cb(null, filters);
    }else {
      cb(err);
    }
  });
}

module.exports = filterFiles;

*/

/*


────────────────────────────────────────────────────────────────────────────────
solution.js:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────────
solution_filter.js:

    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

────────────────────────────────────────────────────────────────────────────────

*/
