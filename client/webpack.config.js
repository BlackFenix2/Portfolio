/* eslint-disable global-require */
// root webpack mount

// register ts-node to compile ts webpack to commonjs modules
require('ts-node').register({
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    noUnusedParameters: false
  },

  // show pretty output for error messages
  pretty: true
});

// check if command is webpack-dev-server or just webpack
const IS_DEV_SERVER = process.argv[1].includes('webpack-dev-server');

// load webpack config depending on dev or prod needs
if (IS_DEV_SERVER) {
  module.exports = require('./tools/webpack/webpack.dev');
} else {
  module.exports = require('./tools/webpack/webpack.prod');
}
