module.exports = {
  src: {
    ejs: 'src/ejs/**/*.ejs',
    sass: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/images/**/*.{jpg,jpeg,png,gif,svg}',
  },
  out: {
    root: 'out',
    ejs: 'out',
    sass: 'out/assets/css',
    js: 'out/assets/js',
    img: 'out/assets/images',
    ignore: ['out/favicon.ico'],
  },
}
