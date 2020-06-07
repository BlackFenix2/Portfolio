/**
 * register ts-node to allow syntax in root .js files
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsconfig = require('./tsconfig.json');

module.exports = require('ts-node').register({
  ...tsconfig,

  // dont typecheck, speeds up build
  transpileOnly: true,

  // show pretty output for error messages
  pretty: true
});
