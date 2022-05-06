'use strict'

const config = require('./config')
const mix = require('laravel-mix')
const glob = require('glob')

glob
  .sync(config.src.sass, {
    ignore: 'src/sass/**/_*.scss',
  })
  .map((file) =>
    mix.sass(file, config.out.sass).sourceMaps(false, 'inline-source-map')
  )

glob.sync('src/js/*.js').map((file) => mix.js(file, config.out.js))

mix.browserSync(require('./bs-config'))
