var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');

var paths = {
  src: './'
};

gulp.task('service-worker', function(callback) {
  swPrecache.write(path.join(paths.src, 'service-worker.js'), {
    staticFileGlobs: [
      paths.src + 'index.html',
      paths.src + 'css/index.css',
      paths.src + 'js/index.js'
    ],
    importScripts: [
      'node_modules/sw-toolbox/sw-toolbox.js',
      'js/toolbox-script.js'
    ],
    stripPrefix: paths.src
  }, callback);
});