require('@quarter/script/helpers')

exports.register = options => {
  const filesystem = require('fs')
  const typescript = require('typescript')
  const transpile = typescript.transpileModule
  const readFile = file => filesystem.readFileSync(file, 'utf8')

  require.extensions['.ts'] = (module, fileName) => {
    const content = readFile(fileName) + `\nclass_module(module)\n`

    const code = transpile(content, {
      reportDiagnostics: true,
      compilerOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        inlineSourceMap: true,
        module: 'CommonJS',
        target: 'ES6',
        ...options,
      },
      fileName,
    })

    module._compile(code.outputText, fileName)
  }
}
