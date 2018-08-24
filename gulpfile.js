var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('sass', function () {
    return gulp.src('lib/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist' ));
});

gulp.task('watch', function () {
    gulp.watch('lib/scss/**/*.scss', ['sass']);
});

