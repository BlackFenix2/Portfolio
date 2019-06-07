/* eslint-disable global-require */
// root webpack mount

// set node memory to 4GB to avoid memory heap exceptions
process.env.NODE_OPTIONS = '--max-old-space-size=4096';
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

// check if command is webpack-serve or just webpack
// cannout use .include() because ES5 :(
const IS_DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') >= 0;

// load webpack config depending on dev or prod needs
if (IS_DEV_SERVER) {
  module.exports = require('./tools/webpack/webpack.dev');
} else {
  module.exports = require('./tools/webpack/webpack.prod');
}
