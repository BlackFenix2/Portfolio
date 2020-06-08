module.exports = {
  siteMetadata: {
    title: 'React Portfolio',
    description: 'The React Portfolio of BlackFenix2',
    author: '@BlackFenix2',
  },
  plugins: [
    'gatsby-theme-core',
    'gatsby-theme-material-ui',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/Shows/Details/*'] },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `src/lib/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#3f51b5',
        theme_color: '#f50057',
        display: 'minimal-ui',
        icon: 'static/icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
