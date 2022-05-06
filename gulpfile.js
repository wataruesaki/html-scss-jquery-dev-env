'use strict'

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlmin = require('gulp-htmlmin')
const htmlSrcPath = 'src/html/**/*.html'
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const imageminGiflossy = require('imagemin-giflossy')
const imageminSvgo = require('imagemin-svgo')
const imgSrcPath = 'src/images/**/*.{jpg,jpeg,png,gif,svg}'

const minifyHTML = (options = {}) =>
  gulp
    .src(htmlSrcPath)
    .pipe(plumber())
    .pipe(htmlmin(options))
    .pipe(gulp.dest('out'))

const minifyImages = () =>
  gulp
    .src(imgSrcPath)
    .pipe(plumber())
    .pipe(
      imagemin([
        mozjpeg({
          quality: 75,
        }),
        pngquant({
          quality: [0.6, 0.8],
        }),
        imageminGiflossy({
          lossy: 80,
        }),
        imageminSvgo(),
      ])
    )
    .pipe(gulp.dest('out/assets/images'))

gulp.task('dev', (cb) => {
  minifyHTML()
  minifyImages()
  gulp.watch(htmlSrcPath, minifyHTML)
  gulp.watch(imgSrcPath, minifyImages)
  cb()
})

gulp.task('build', (cb) => {
  minifyHTML({ collapseWhitespace: true })
  minifyImages()
  cb()
})
