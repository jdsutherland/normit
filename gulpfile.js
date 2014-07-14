var gulp   = require('gulp');
var watch  = require('gulp-watch');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

gulp.task('default', function() {
  gulp.watch(['lib/*.js'], ['lint'])
});

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  return gulp.src('./test/normit_test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});