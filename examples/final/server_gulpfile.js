var gulp = require("gulp");
var gutil = require('gulp-util');
var inject = require("gulp-inject");
var livereload = require("gulp-livereload");
var bower = require("bower-files");

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname + "/.tmp";
var LIVERELOAD_PORT = 35729;
var lr_script = "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script>";

gulp.task("bower", function()
{
  return gulp.src(bower.js);
});

gulp.task("express",function()
{
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static( EXPRESS_ROOT));
  app.listen(EXPRESS_PORT); 
});

gulp.task("live",["express"],function()
{
  gulp.watch( "./app/**/*.*", ["inject"]);

  var server = livereload();

  return gulp.watch(EXPRESS_ROOT + '/**/*', function(evt){
    server.changed(evt.path);
  });
});


gulp.task("reload", function(e)
{
  server.changed();
});

gulp.task("livetest",function()
{
  server = livereload();
  gulp.watch( "./app/**/*.*", ["inject"]);

  server.changed(EXPRESS_ROOT);
  return gulp.watch(EXPRESS_ROOT, function(evt){
    server.changed(evt.path);
  });
});


gulp.task('inject', function () {
  console.log("FILE CHANGE");
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./.tmp'));
});
