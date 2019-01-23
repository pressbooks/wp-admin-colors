let gulp = require("gulp");
let del = require("del");
let download = require("gulp-download-stream");

let version = "5.0.3";

gulp.task("clean", require("del").bind(null, "dist/"));

gulp.task("default", gulp.series("clean", function(done) {
  return download([
    "https://raw.githubusercontent.com/WordPress/WordPress/" +
      version +
      "/wp-admin/css/colors/_admin.scss",
    "https://raw.githubusercontent.com/WordPress/WordPress/" +
      version +
      "/wp-admin/css/colors/_variables.scss",
    "https://raw.githubusercontent.com/WordPress/WordPress/" +
      version +
      "/wp-admin/css/colors/_mixins.scss"
  ]).pipe(gulp.dest("dist/"));
  done();
}));
