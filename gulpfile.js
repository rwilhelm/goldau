var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
  .pipe(sass({sourcemap: true, sourcemapPath: '../../src/scss'}))
  .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
  gulp.watch(['src/scss/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);
