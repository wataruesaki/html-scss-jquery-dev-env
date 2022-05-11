const html = (name) => `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>${name}</title>
    <link rel="stylesheet" href="/assets/css/${name}.css" />
  </head>

  <body>
    <header id="js-header"></header>

    <main></main>

    <footer></footer>

    <script src="/assets/js/${name}.js"></script>
  </body>
</html>
`

const sass = `@use "foundation/variable" as v;
@use "foundation/mixin" as m;
@use "common";
`

const js = `import './modules/common'
import $ from 'jquery'

$(function () {})
`

module.exports = {
  html,
  sass,
  js,
}
