import gulp from 'gulp';
import requireDir from 'require-dir';
import PATHS from './gulp/path';
requireDir('./gulp');

const debag = false;

gulp.task('default', () => {
  gulp.task('start',['js'])
  gulp.watch(PATHS.JS_FULL, ['js']);
  gulp.watch(PATHS.CSS_FULL, ['css']);
});
