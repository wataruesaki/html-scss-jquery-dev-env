# html-scss-jquery-dev-env

I developed this public template for frontend junior developers.

You can use HTML, Dart Sass, jQuery and util features.

Happy coding!

## Table of contents

### [0. Prerequisites](#prerequisites)

### [1. Features](#features)

### [2. How to use](#how-to-use)

### [3. Utils](#utils)

### [4. Next](#next)

<h2 id="prerequisites">0. Prerequisites</h2>

・Node 16.X.X

・npm 8.X.X

・yarn 1.X.X

<h2 id="features">1. Features</h2>

・HTML minifier

・Dart Sass Compiler

・Webpack

・Babel

・Automatic image compressor

・Hot reload server

・Linter

・Formatter

・Utils

<h2 id="how-to-use">2. How to use</h2>

### Development

#### 1. Install packages

Run only at the first time.

```shell
yarn install
```

#### 2. Run dev server

Visit [localhost:3000](http://localhost:3000) after you run the following command.

```shell
yarn dev
```

#### 2. Code

Assets are in the following folders.

HTML: `src/html`

Sass: `src/sass`

JavaScript: `src/js`

Images: `src/images`

*A compressed image is generated automatically if you put an image into `src/images`.

### Deployment

#### 1. Generate optimized assets

```shell
yarn build
```

The following assets are generated.

`out/**/*.html`

`out/assets/css/**/*.css`

`out/assets/js/*.js`

`out/assets/images/**/*.{jpg,jpeg,png,gif,svg}`

#### 2. Confirm `out` in dev server

Visit [localhost:3000](http://localhost:3000) after you run the following command.

```shell
yarn start
```

#### 3. Put `out` into your production environment if there is no problem

That's it!

<h2 id="utils">3. Utils</h2>

### Mixins

#### mq($bp)

Use media queries efficiently.

##### Configuration

###### `src/sass/foundation/variable.scss`

```scss
$mq: (
  bd: "sp", // "sp" | "pc"
  se: 374,
  sm: 600,
  md: 960,
  lg: 1280,
);
```

bd stands for base device.

It must be `"sp"` or `"pc"`.

You can change and add breakpoints like sm, md and lg.

###### Example

```scss
@use "foundation/mixin" as m;

.hoge {
  // * The following mq($bp) doesn't depend on bd
  @include m.mq(se) {
    // iPhone SE styles
  }

  // * In case of bd is sp
  // SP Styles

  @include m.mq(sm) {
    // Tablet styles
  }

  @include m.mq(md) {
    // Styles of a big tablet and PC
  }

  @include m.mq(lg) {
    // PC styles
  }

  // * In case of bd is pc
  // PC styles

  @include m.mq(lg) {
    // Styles of a big tablet and PC
  }

  @include m.mq(md) {
    // Tablet styles
  }

  @include m.mq(sm) {
    // SP Styles
  }
}
```

Basically, you should use `mq(sm)` and `mq(md)`.

Use `mq(se)` and `mq(lg)` as necessary.

#### fz($fz, $px: false)

Output font-size.

I prepared 2 patterns for old web browsers.

```scss
@use "foundation/mixin" as m;

.hoge {
  @include m.fz(1.4); // Should be font-size: 1.4rem;
  @include m.fz(1.4, true); // Should be font-size: 14px; font-size: 1.4rem;
}
```

### Scripts

#### Create assets

```shell
yarn run create -n [name]
```

#### Delete assets

```shell
yarn run delete -n [name]
```

<h2 id="next">4. Next</h2>

I recommend you using a template engine like EJS and Pug.

And you shouldn't use jQuery because you can develop most features even if you don't use it.

Some frontend junior developers need it at first.

I added it to this public template for them.

But to be honest, I don't want you to use it if you don't have reasons you must use it.
