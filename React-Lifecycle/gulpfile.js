var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function(){
  return gulp.src('script.jsx')
        .pipe(react())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./'));
});
