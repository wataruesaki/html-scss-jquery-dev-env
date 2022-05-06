'use strict'

const mix = require('laravel-mix')
const glob = require('glob')
const ASSETS_PATH = 'out/assets'

glob
  .sync('src/sass/**/*.scss', {
    ignore: 'src/sass/**/_*.scss',
  })
  .map((file) =>
    mix.sass(file, `${ASSETS_PATH}/css`).sourceMaps(false, 'inline-source-map')
  )

glob.sync('src/js/*.js').map((file) => mix.js(file, `${ASSETS_PATH}/js`))
