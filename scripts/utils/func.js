'use strict'

const chalk = require('chalk')
const commandLineArgs = require('command-line-args')

const getArgs = () => {
  const options = commandLineArgs([
    {
      name: 'name',
      alias: 'n',
      type: String,
    },
  ])

  if (!options.name) {
    throw new Error(chalk.red('Please try again after specifying -n [name].'))
  }

  return options
}

module.exports = {
  getArgs,
}
