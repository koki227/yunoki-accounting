var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var $ = require('gulp-load-plugins')();
var config = require('config');

/**
* Launch the Server
*/
gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    // Change as required, also remember to set in theme settings
    proxy: "HOSTNAME.dev",
    port: 3000
  });
});

/**
* @task sass
* Compile files from scss
*/
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe($.sassGlob())
    .pipe(sass({
      includePaths: ['./node_modules/breakpoint-sass/stylesheets']
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('css'));
    // .pipe(browserSync.reload({stream:true}));
});

// /**
// * @task scripts
// * Compile files from js
// */
// gulp.task('scripts', function() {
//   return gulp.src(['_js/*.js', '_js/custom.js'])
//   .pipe(babel({
//     presets: ['es2015']
//   }))
//   .pipe(concat('scripts.js'))
//   .pipe(gulp.dest('js'))
//   .pipe(browserSync.reload({stream:true}))
// });

/**
* @task clearcache
* Clear all caches
*/
gulp.task('clearcache', function(done) {
  return cp.spawn('drush', ['cache-rebuild'], {stdio: 'inherit'})
    .on('close', done);
});

/**
* @task reload
* Refresh the page after clearing cache
*/
gulp.task('reload', ['clearcache'], function () {
  browserSync.reload();
});

/**
* @task watch
* Watch scss files for changes & recompile
* Clear cache when Drupal related files are changed
*/
gulp.task('watch', function () {
  gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass']);
  // gulp.watch(['_js/*.js'], ['scripts']);s
  // gulp.watch(['templates/*.html.twig', '**/*.yml'], ['reload']);
});

/**
* Default task, running just `gulp` will 
* compile Sass files, launch BrowserSync, watch files.
*/
gulp.task('default', ['browser-sync', 'watch']);