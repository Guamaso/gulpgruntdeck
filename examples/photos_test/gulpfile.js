var gulp = require("gulp")
  , gu = require("gulp-util")
  , map = require("gulp-map")
  , fs = require("fs")
  , moment = require("moment")
  , q = require("q");

var UNSORTED_FOLDER = 'images'//place to get images from
  , SORTED_FOLDER = 'sorted'//Place to sort images TO
  //Can MomentJS return month name instead of number? I looked, but couldn't find anything...
  //Array will translate number to month
  , MONTH_NAMES = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];



gulp.task("organize", function()
{
  //we only need file paths, so pass read:false.
  var folders = gulp.src( UNSORTED_FOLDER + "/*.*", {read:false} )
    .pipe( map(function( file )
    {
      //wrap the file stats in a promise
      var file_stats = q.nfbind( fs.stat );

      //when promise fulfilled, move file
      return file_stats( file.path ).done(function( meta )
      {                    
	      //use moment use to parse date
	      //unfortunately, the "taken date" seems to be exif data and not file system data
	      // so I can't get the *exact* date of photo (maybe parse the file name?), at least
	      // until I can find a plugin to read EXIF data.
        var file_date = moment( meta.mtime )//get moment object for file modified date
            , month = MONTH_NAMES[file_date.month()]//get the month of that date and convert it to month name
            , year = file_date.year()//get the year of the date
            , dest = SORTED_FOLDER + "/"+year+"/"+month+"/";//build the full destination string
        //Move the file
        gulp.src( file.path )
          .pipe( gulp.dest( dest ) );
          
        //BOOM. Done.
      })
    }))


});