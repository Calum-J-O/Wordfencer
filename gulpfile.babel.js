const {
    series,
    src,
    dest,
    watch
} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function compileJs() {
    return src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('sourcecode.js'))
        .pipe(rename({ extname: '.min.js'}))
        .pipe(sourcemaps.write("."))
        .pipe(dest('build'));
};

function watchFiles() {
    watch('src/**/*.js', series(compileJs));
};

exports.default = series(compileJs, watchFiles);