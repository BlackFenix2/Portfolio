module.exports = {
  siteMetadata: {
    title: 'Cool Cats',
    description: "Chris P's cool cats with swag",
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
