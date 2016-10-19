var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    babel = require('babelify'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglifyjs'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('bundle-js-app', function () {
    var bundler = browserify('./js/src/app.js', { debug: true }).transform(babel);

    bundler.bundle()
        .on('error', function (e) {
            gutil.log(e);
        })
        .pipe(source('app.bundle.js'))
        .pipe(buffer())
        //.pipe(uglify())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/dist'))
});