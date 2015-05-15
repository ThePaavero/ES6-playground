var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell')
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

// -------------------------------------------------------------------------

gulp.task('sass', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({ compatibility: 'ie9' }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('jspm-build', shell.task('jspm bundle-sfx main build.js'));

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'es6.dev'
    });
});

// -------------------------------------------------------------------------

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass', 'browser-sync']);
});

gulp.task('build', function () {
    gulp.run('jspm-build');
});
