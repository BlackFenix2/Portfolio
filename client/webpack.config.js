//root webpack mount

//register ts-node to compile ts webpack to commonjs modules
require('ts-node').register({
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    esModuleInterop: true,
    allowSyntheticDefaultImports: true
  },
  pretty: true
});

// check if command is webpack-serve or just webpack
const IS_DEV_SERVER = process.argv[1].indexOf('webpack-serve') >= 0;

// load webpack config depending on dev or prod needs
if (IS_DEV_SERVER) {
  module.exports = require('./tools/webpack/webpack.dev');
} else {
  module.exports = require('./tools/webpack/webpack.prod');
}
