var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var rename = require("gulp-rename");
var webpack = require('webpack-stream');

var BUNDLE_ENTRY_PATH = './src/main.js';
var INDEX_PATH = './src/index.html';
var DIST_PATH = 'dist';

gulp.task('dist', function(callback) {
  runSequence(
    'dist:clean',
    ['dist:index', 'dist:bundle'],
    callback
  );
});

gulp.task('dist:clean', function () {
  return del([DIST_PATH]);
});

gulp.task('dist:bundle', function() {
  return gulp.src(BUNDLE_ENTRY_PATH)
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('dist:index', function() {
  return gulp.src(INDEX_PATH)
    .pipe(gulp.dest(DIST_PATH));
});