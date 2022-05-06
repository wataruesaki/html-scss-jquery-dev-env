'use strict'

const fs = require('fs/promises')
const chalk = require('chalk')
const { getArgs } = require('./utils/func')
const data = require('./utils/data')

const create = async () => {
  const { name } = getArgs()
  const htmlPath = `src/html/${name}`
  const imgPath = `src/images/${name}`

  const tryMkDir = async (path) => {
    try {
      await fs.mkdir(path)
      console.log(chalk.green(`${path} was created.`))
      return true
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw new Error(chalk.red(err.message))
      }

      console.log(chalk.red(`Ignored ${path} because it already exists.`))
      return false
    }
  }

  await tryMkDir(htmlPath)
  await tryMkDir(imgPath)

  const writePathMap = [
    {
      path: `${htmlPath}/index.html`,
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
      console.log(chalk.green(`${path} was created.`))
    } catch (err) {
      throw new Error(chalk.red(err.message))
    }
  })
}

create()
