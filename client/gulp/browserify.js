import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

gulp.task('js', () => {
  browserify({
    entries: ['assets/js/common.js']
  })
  .transform(babelify)
  .bundle()
  .on('error', err => notify().write(err))
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(gulp.dest('../server/public/js'))
});
