module.exports = {
  siteMetadata: {
    title: 'Client Test',
    description: 'Testing client-side routing overall',
    author: '@BlackFenix2'
  },
  plugins: [
    'gatsby-theme-core',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/*'] }
    }
  ]
};
