import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

gulp.task('default', () => {
  // es6 linting
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
  // es6 transpilation
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});
