//----------------------------------------------------
// gulpfile.js
// 
// tasks to minify the disemvowel plugin file
//----------------------------------------------------



//----------------------------------------------------
// required packages
//----------------------------------------------------
var gulp   = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");



//----------------------------------------------------
// tasks
//----------------------------------------------------
gulp.task( "default", function() {
	return gulp.src( 'src/disemvowel.js' )
		.pipe( uglify() )
		.pipe( rename('disemvowel.min.js') )
		.pipe( gulp.dest( 'src' ) )
	;
});