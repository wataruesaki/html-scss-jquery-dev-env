'use strict'

require('laravel-mix-ejs')
require('laravel-mix-esbuild')

const { readdirSync } = require('fs')
const { extname, basename, dirname } = require('path')
const config = require('./config')
const mix = require('laravel-mix')
const glob = require('glob')

const getFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((dirent) =>
    dirent.isFile()
      ? [`${dir}/${dirent.name}`]
      : getFiles(`${dir}/${dirent.name}`)
  )
const ejsFiles = getFiles('src/ejs')

ejsFiles.forEach((file) => {
  const regex = new RegExp(/_.*\.ejs$/)

  if (extname(file) !== '.ejs' || regex.test(basename(file))) {
    return
  }

  return mix.ejs(file, dirname(file).replace('src/ejs', 'out'))
})

glob
  .sync(config.src.sass, {
    ignore: 'src/sass/**/_*.scss',
  })
  .map((file) =>
    mix.sass(file, config.out.sass).sourceMaps(false, 'inline-source-map')
  )
glob.sync('src/js/*.js').map((file) => mix.js(file, config.out.js).esbuild())

mix.browserSync(require('./bs-config'))
