var gulp = require("gulp")
  , map = require("gulp-map")
  , fs = require("fs")
  , moment = require("moment")
  ;



gulp.task("organize", function()
{
  var folders = gulp.src("images/*.*", false);
    .pipe( map(function()
    {
      return fs.stats(file.path).then(function(meta)
      {
        var file_date = moment(meta.mtime,'2009-06-29T11:11:55Z');
            , month = file_date.month()
            , year = file_date.year();

        //Move the file
        gulp.src(file.path)
          .pipe(gulp.dest("sorted/"+year+"/"+month+"/"));
      })
    }))


});