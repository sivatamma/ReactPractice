var gulp = require('gulp');
var reactify = require('reactify');
var gutil = require('gulp-util');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./dropdown/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache : {},
    fullPaths: true
  }));

  var build = function(file) {
    if(file) gutil.log('recompiling '+ file);
    return bundler.bundle()
            .on('error', gutil.log.bind(gutil, 'browserify error'))
            .pipe(source('./main.js'))
            .pipe(gulp.dest('./'));
  }
  build();
  bundler.on('update', build);
});
