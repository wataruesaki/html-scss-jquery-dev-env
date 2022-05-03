'use strict'

const mix = require('laravel-mix')
const MixGlob = require('laravel-mix-glob')
const mixGlob = new MixGlob({ mix })

mixGlob.sass('src/sass/**/*.scss', 'out/assets/css')
