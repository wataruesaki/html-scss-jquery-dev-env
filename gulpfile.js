'use strict'

const config = require('./config')
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const copy = require('gulp-copy')
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const imageminGiflossy = require('imagemin-giflossy')
const imageminSvgo = require('imagemin-svgo')

const copyPublic = () =>
  gulp.src('public/*').pipe(plumber()).pipe(copy('', {})).pipe(gulp.dest('out'))

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

const main = () => {
  copyPublic()
  compressImages()
}

const watch = () => {
  gulp.watch(config.src.img, compressImages)
}

gulp.task('dev', (cb) => {
  main()
  watch()
  cb()
})

gulp.task('build', (cb) => {
  main()
  cb()
})

gulp.task('clean', (cb) => {
  const ignore = config.out.ignore.map((i) => `!${i}`)
  del([`${config.out.root}/**`, ...ignore])
  cb()
})
