'use strict'

const config = require('./config')
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const imageminGiflossy = require('imagemin-giflossy')
const imageminSvgo = require('imagemin-svgo')

const minifyHTML = (options = {}) =>
  gulp
    .src(config.src.html)
    .pipe(plumber())
    .pipe(htmlmin(options))
    .pipe(gulp.dest(config.out.html))

const compressImages = () =>
  gulp
    .src(config.src.img)
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
    .pipe(gulp.dest(config.out.img))

gulp.task('clean', (cb) => {
  del([`${config.out.root}/**`, `!${config.out.ignore}`])
  cb()
})

gulp.task('dev', (cb) => {
  minifyHTML()
  compressImages()
  gulp.watch(config.src.html, minifyHTML)
  gulp.watch(config.src.img, compressImages)
  cb()
})

gulp.task('build', (cb) => {
  minifyHTML({ collapseWhitespace: true })
  compressImages()
  cb()
})
