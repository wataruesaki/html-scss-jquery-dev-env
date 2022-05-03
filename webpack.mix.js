'use strict'

const mix = require('laravel-mix')
const glob = require('glob')
const ASSETS_PATH = 'out/assets'

glob
  .sync('src/sass/**/*.scss', {
    ignore: 'src/sass/**/_*.scss',
  })
  .map((file) => {
    mix.sass(file, `${ASSETS_PATH}/css`)
  })
