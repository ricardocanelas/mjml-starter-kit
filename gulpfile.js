var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var mjml        = require('gulp-mjml');

// Require your own components if needed, and your mjmlEngine
// require('./components')
var mjmlEngine = require('mjml');


/*---------------------------------------------------------------------------
 * Browser Sync
 ---------------------------------------------------------------------------*/

gulp.task('build', function () {
    return gulp.src('./templates/**/*.mjml')
        .pipe(mjml(mjmlEngine))
        .pipe(gulp.dest('./dist'))
});


/*---------------------------------------------------------------------------
 * Browser Sync
 ---------------------------------------------------------------------------*/
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./templates/*.mjml").on('change', browserSync.reload);
});


/*---------------------------------------------------------------------------
 * Default & Watcher
 ---------------------------------------------------------------------------*/
gulp.task('default',['build']);
gulp.task('watch',['build', 'browser-sync']);
