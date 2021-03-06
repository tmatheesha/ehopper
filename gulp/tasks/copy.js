var gulp   = require('gulp');
var config = require('../config.js');

gulp.task('copy:fonts', function() {
    return gulp
        .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:lib', function() {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:oldCss', function() {
    return gulp
        .src(config.src.root + '/root/**/*.*')
        .pipe(gulp.dest(config.dest.root + '/static/'));
});

gulp.task('copy:img', function() {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy:jsVendor', function() {
    return gulp
        .src(config.src.js + '/vendor/**/*.js')
        .pipe(gulp.dest(config.dest.js + '/vendor'));
});

gulp.task('copy:jsStatic', function() {
    return gulp
        .src(config.src.js + '/static/**/*.js')
        .pipe(gulp.dest(config.dest.js));
});

gulp.task('copy', [
    'copy:img',
    'copy:oldCss',
    // 'copy:lib',
    'copy:jsVendor',
    'copy:jsStatic',
    'copy:fonts'
]);
gulp.task('copy:watch', function() {
    gulp.watch(config.src.img+'/*', ['copy']);
    gulp.watch(config.src.js + '/static/**/*.js', ['copy']);
    gulp.watch(config.src.js + '/vendor/**/*.js', ['copy']);
});