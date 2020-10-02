const create = require('./index')

const laminae = Object.keys(create.laminae)

module.exports = {
  name: 'create [slab]',
  description: 'Create a slab',
  exec: create.fn,
  args: (args) => {
    args
      .positional('slab', {
        describe: 'The name of the slab to create lamina for'
      })
      .option('laminae', {
        alias: 'l',
        type: 'array',
        describe: 'The specific laminae to create for this slab',
        choices: laminae,
        default: laminae
      })
  }
}