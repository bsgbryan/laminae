const init = require('./index')

module.exports = {
  name: 'init [project]',
  description: 'Initialize a new project',
  exec: init.fn,
  args: (args) => {
    args
      .positional('project', {
        describe: 'The name of the to initialize. A new directory will be created using this name.'
      })
  }
}