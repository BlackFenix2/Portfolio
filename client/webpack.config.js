require('ts-node').register({
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    esModuleInterop: true,
    allowSyntheticDefaultImports: true
  },
  pretty: true
});

module.exports = require('./webpack.config.ts');
