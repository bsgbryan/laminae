#!/usr/bin/env node

const yargs    = require('yargs')
const commands = require('./commands/all')

for (const cmd of commands)
  yargs.command(
    cmd.name,
    cmd.description,
    cmd.args,
    cmd.exec
  )

yargs.option('verbose', {
  alias: 'v',
  type: 'boolean',
  description: 'Execute with verbose logging'
})
.argv