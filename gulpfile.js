/**
 * Created by ssge on 2016/3/24.
 */
var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var browerify = require('browserify');
var rename = require('gulp-rename');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var concat = require('gulp-concat');
var copy = require('gulp-copy');
var historyApiFallback  = require('connect-history-api-fallback');

gulp.task('browserify', function () {
    var bundler = browerify('src/js/app.js');
    bundler.transform("babelify", {
        presets: ['es2015', 'react']
    });
    bundler.bundle()
        .pipe(source('src/js/app.js'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('src/dist'));
    //gulp.src('src/js/app.js')
    //    .pipe(browerify({
    //        transform: ['babelify'],
    //        presets: ['es2015','react']
    //    }))
    //    .pipe(browerify({
    //        transform: ['reactify'],
    //        debug: !gulp.env.production
    //    }))
    //    .pipe(rename('bundle.js'))
    //    .pipe(gulp.dest('src/dist'))
});

gulp.task('server', function () {
    connect.server({
        root: ['src/'],
        port: '8000',
        livereload: true,
        middleware: function (connect, opt) {
            return [historyApiFallback()];
        }
    });
});

gulp.task('open', function () {
    gulp.src('src/index.html')
        .pipe(open({
            uri: 'http://localhost:8000',
            app: 'chrome'
        }))
});

gulp.task('reload', function () {
    gulp.src(['src/**/*.*', '!src/dist/bundle.js'])
        .pipe(connect.reload());
});

gulp.task('less', function () {
    gulp.src(['src/css/**/*.less'])
        .pipe(less())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('src/dist/'))
});

gulp.task('copy', function () {
    gulp.src(['node_modules/semantic-ui/dist/semantic.css', 'node_modules/semantic-ui/dist/semantic.js',
            'node_modules/jquery/dist/jquery.js'])
        .pipe(copy('src/dist/', {
            prefix: 3
        }));
});

gulp.task('default', ['browserify', 'less', 'copy', 'server', 'open'], function () {
    gulp.watch(['src/**/*.*', '!src/dist/bundle.js', '!src/dist/bundle.css'], ['browserify', 'less', 'reload']);
});