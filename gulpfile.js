var gulp = require('gulp');
var del = require('del');
var download = require('gulp-download-stream');

var version = '4.8.1';

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
