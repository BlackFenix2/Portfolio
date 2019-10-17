// register ts-node to compile ts tools
require('./tools/tsRegister');

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('./tools/gatsby/gatsby-config');
