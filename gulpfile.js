var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var bs = require('browser-sync').create();

var errorHandler = function(err) {
  $.util.log(err);
  this.emit('end');
}

gulp.task('clean', function(done) {
  del('dist', done);
});

gulp.task('css', function() {
  return gulp.src('src/styles/*.scss')
    .pipe($.sass().on('error', errorHandler))
    .pipe($.autoprefixer())
    .pipe($.csso())
    .pipe($.csslint())
    .pipe($.csslint.reporter())
    .pipe(gulp.dest('dist/styles'))
    .pipe(bs.stream());
});

gulp.task('beautify', function() {
  return gulp.src('gulpfile.js')
    .pipe($.jsbeautifier({
      config: '.jsbeautifyrc'
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
  bs.init({
    server: 'dist',
    port: 4000
  });
});

gulp.task('default', ['css', 'html', 'serve'], function() {
  gulp.watch('src/**/*.scss', ['css']);
  gulp.watch('src/*.html', ['html', bs.reload]);
});
