/**
 * register ts-node to allow syntax in root .js files
 */
module.exports = require('ts-node').register({
  compilerOptions: {
    target: 'esnext',
    module: 'commonjs',
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    noUnusedParameters: false
  },

  // show pretty output for error messages
  pretty: true
});
