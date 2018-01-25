let gulp = require('gulp');
let del = require('del');
let download = require('gulp-download-stream');

let version = '4.9.2';

gulp.task('download', function () {
  return download([
    'https://raw.githubusercontent.com/WordPress/WordPress/' + version + '/wp-admin/css/colors/_admin.scss',
    'https://raw.githubusercontent.com/WordPress/WordPress/' + version + '/wp-admin/css/colors/_variables.scss',
    'https://raw.githubusercontent.com/WordPress/WordPress/' + version + '/wp-admin/css/colors/_mixins.scss',
  ])
  .pipe(gulp.dest('dist/'));
});

gulp.task('clean', require('del').bind(null, 'dist/'));

gulp.task('default', ['clean'], function() {
  gulp.start('download');
});
