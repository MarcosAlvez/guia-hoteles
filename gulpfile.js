'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async function() {
    gulp.src('./css/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
})
