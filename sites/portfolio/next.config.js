const withImages = require('next-images');

module.exports = withImages({
  inlineImageLimit: 16384,
  webpack(config, options) {
    return config;
  },
});
