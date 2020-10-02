const fs = require('fs')
const path = require('path')

const laminae = {
  cmp: 'Component',
  cnt: 'Container',
  hfs: 'HOFs',
  slc: 'Slice',
  mgr: 'PropsManager',
  stl: 'Styles'
}

const resource = (p, thing, type, verbose) => {
  const resource = fs.
    readFileSync(`${__dirname}/example/${type}.js`, 'utf8').
    replace(/PATH/g, p.map(_ => '../').join('')).
    replace(/REPLACE/g, thing)
  
  const dir = path.join(`${process.cwd()}/src`, p.join('/'))
  
  fs.mkdirSync(dir, { recursive: true })
  
  fs.writeFileSync(`${dir}/${thing}${type}.js`, resource)

  if (verbose)
    console.info(`    resourse`)
}

const test = (p, thing, type, dots, verbose) => {
  const testImportPath = `${dots}src/${p.join('/')}`

  const test = fs.
    readFileSync(`${__dirname}/example/${type}.spec.js`, 'utf8').
    replace(/PATH/g, testImportPath).
    replace(/REPLACE/g, thing)
  
  const testDir = path.join(`${process.cwd()}/__tests__`, p.join('/'))
  
  fs.mkdirSync(testDir, { recursive: true })
  
  fs.writeFileSync(`${testDir}/${thing}${type}.spec.js`, test)

  if (verbose)
    console.info(`    test`)
}

module.exports = {
  laminae,
  fn: (args) => {
    const scope = args.slab.split('/')
    const mod   = scope[scope.length - 1]
    const dots  = scope.map(_ => '../').join('')

    if (args.verbose)
      console.info(args.slab)

    for (const lamina of args.laminae) {
      const thing = laminae[lamina]

      if (args.verbose)
        console.info(`  ${thing}`)

      resource(scope, mod, thing, args.verbose)
      test(scope, mod, thing, dots, args.verbose)
    }
  }
}