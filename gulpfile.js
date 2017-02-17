var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');
var RevAll = require('gulp-rev-all');

var paths = {
  src: './'
};

gulp.task('service-worker', function(callback) {
  swPrecache.write(path.join(paths.src, 'service-worker.js'), {
    staticFileGlobs: [
      paths.src + 'index.html',
      paths.src + 'css/index.css',
      paths.src + 'js/index.js',
      paths.src + 'js/fetchpoly.js',
      paths.src + 'js/promisepoly.js'
    ],
    importScripts: [
      'node_modules/sw-toolbox/sw-toolbox.js',
      'js/toolbox-script.js'
    ],
    stripPrefix: paths.src
  }, callback);
});

gulp.task('default', function () {
 
  gulp
    .src('js/**')
    .pipe(RevAll.revision())
    .pipe(gulp.dest('cdn'));
 
});

const $ = gulpLoadPlugins();
const versionConfig = {
  'value': '%MDS%',
  'append': {
    'key': 'v',
    'to': ['css', 'js'],
  },
};

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe($.versionNumber(versionConfig))
    .pipe(gulp.dest('docroot'));
});