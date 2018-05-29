const tsc = require('typescript');
const webpackConfig = require('fs').readFileSync('./webpack.config.ts', 'utf8');
const options = {
  compilerOptions: {
    target: 'es5',
    module: 'commonjs',
    esModuleInterop: true
  }
};

eval(tsc.transpileModule(webpackConfig, options).outputText);
