var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglifyjs'),
    sourcemaps = require('gulp-sourcemaps'),
    libs = require('../config.json').libs;

gulp.task('bundle-js-libs', function () {
    var paths = Object.keys(libs).map(function(key) {
        return libs[key];
    }),
    bundler = browserify(paths, { debug: true });

    bundler.bundle()
        .on('error', function (e) {
            gutil.log(e);
        })
        .pipe(source('libs.bundle.js'))
        .pipe(buffer())
        //.pipe(uglify())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/dist'))
});
