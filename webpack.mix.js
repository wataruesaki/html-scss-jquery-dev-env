'use strict'

const mix = require('laravel-mix')
const MixGlob = require('laravel-mix-glob')
const mixGlob = new MixGlob({ mix })
const ASSETS_PATH = 'out/assets'

mixGlob.sass('src/sass/**/*.scss', `${ASSETS_PATH}/css`)
