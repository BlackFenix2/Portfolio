// register ts-node to compile ts gatsby to commonjs modules
require('ts-node').register({
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('./tools/gatsby/gatsby-config');
