'use strict'

const fs = require('fs/promises')
const chalk = require('chalk')
const { getArgs } = require('./utils/func')
const data = require('./utils/data')

const create = async () => {
  const { name } = getArgs()
  const imageDir = `src/images/${name}`
  let isIgnoredImageDir = false

  try {
    await fs.mkdir(imageDir)
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw new Error(chalk.red(err.message))
    }

    console.log(chalk.red(`Ignored ${imageDir} because it already exists.`))
    isIgnoredImageDir = true
  }

  const writePathMap = [
    {
      path: `src/html/${name}.html`,
      data: new Uint8Array(Buffer.from(data.html(name))),
    },
    {
      path: `src/sass/${name}.scss`,
      data: new Uint8Array(Buffer.from(data.sass)),
    },
    {
      path: `src/js/${name}.js`,
      data: new Uint8Array(Buffer.from(data.js)),
    },
  ]

  writePathMap.map(async ({ path, data }) => {
    try {
      await fs.writeFile(path, data)
    } catch (err) {
      throw new Error(chalk.red(err.message))
    }
  })

  console.log(chalk.green('Congrats!'))
  console.log(chalk.green('The following assets were created.'))

  if (!isIgnoredImageDir) {
    console.log(imageDir)
  }

  writePathMap.map(({ path }) => console.log(path))
}

create()
