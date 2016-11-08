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

// Uncomment this if you want hot transpilation while you develop code.
// You will need to keep the terminal where you run `gulp` open while you code.
gulp.watch(['src/**/*.js'], ['default']);
