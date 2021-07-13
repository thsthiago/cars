const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const imagemin = require('gulp-imagemin')

gulp.task('default', watch)
gulp.task('sass', compilaSass)
gulp.task('babelExec', babelExec)
gulp.task('imagemin', minImage)

function compilaSass () {
  return gulp
    .src('src/public/styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('src/dist/styles'))
}

function babelExec () {
  return gulp
    .src('src/public/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('src/dist'))
}

function minImage () {
  return gulp
    .src('src/public/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/dist/images'))
}

function watch () {
  gulp.watch([
    'src/public/styles/**/*.scss'
  ], compilaSass)
  gulp.watch([
    'src/public/js/**/*.js'
  ], babelExec)
  gulp.watch([
    'src/public/images/*'
  ], minImage)
}
