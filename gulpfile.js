var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');


gulp.task('concat', function () {
    return gulp.src(
        [
            'lib/js/wysihtml5-0.3.0.min.js',
            'node_modules/remarkable/dist/remarkable.min.js',
            'node_modules/turndown/dist/turndown.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist'));
});


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

