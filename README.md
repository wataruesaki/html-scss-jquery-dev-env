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

#### 1. Run dev server

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

#### 2. Check `out` in dev server

Visit [localhost:3000](http://localhost:3000) after you run the following command.

```shell
yarn start
```

#### 3. Put `out` into your production environment if there is no problem

That's it!

<h2 id="utils">3. Utils</h2>

### Create assets

```shell
yarn run create -f [name]
```

### Delete assets

```shell
yarn run delete -f [name]
```

<h2 id="next">4. Next</h2>

I recommend you using a template engine like EJS and Pug.

And you shouldn't use jQuery because you can develop most features even if you don't use it.

Some frontend junior developers need it at first.

I added it to this public template for them.

But to be honest, I don't want you to use it if you don't have reasons you must use it.
