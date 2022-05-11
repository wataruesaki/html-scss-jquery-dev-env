'use strict'

const fs = require('fs')
const del = require('del')
const chalk = require('chalk')
const prompts = require('prompts')
const { getArgs } = require('./utils/func')

const delAssets = async () => {
  const { name } = getArgs()
  const targetPathArr = [
    `src/html/${name}`,
    `src/images/${name}`,
    `src/sass/${name}.scss`,
    `src/js/${name}.js`,
  ]
  const delPathArr = []

  targetPathArr.forEach((path) => {
    if (fs.existsSync(path)) {
      delPathArr.push(path)
    }
  })

  if (delPathArr.length === 0) {
    console.log(chalk.green('No assets to delete.'))
    return
  }

  const getDelMsg = () => {
    let msg = chalk.red('The following assets will be deleted.')

    delPathArr.forEach((path) => {
      msg += `
${path}`
    })

    return `${msg}
${chalk.red('Run seriously? (y/N):')}`
  }

  const { isRun } = await prompts({
    type: 'text',
    name: 'isRun',
    message: getDelMsg(),
  })

  if (isRun !== 'y') {
    console.log(chalk.red('Canceled.'))
    return
  }

  delPathArr.forEach((path) => {
    try {
      del(path)
      console.log(chalk.green(`${path} was deleted.`))
    } catch (err) {
      throw new Error(chalk.red(err.message))
    }
  })
}

delAssets()
