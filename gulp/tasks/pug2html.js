const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')
const rename = require('gulp-rename')
const bemValidator = require('gulp-html-bem-validator')

module.exports = function pug2html() {
  return gulp.src('src/views/pages/**/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug())
    .pipe(htmlValidator())
    .pipe(bemValidator())
    // .pipe(rename('index.php'))
    .pipe(gulp.dest('build'))
}

