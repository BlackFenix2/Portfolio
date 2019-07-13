module.exports = {
  siteMetadata: {
    title: 'React Portfolio',
    description: 'The react portfolio of BlackFenix2',
    author: '@BlackFenix2'
  },
  plugins: [
    'gatsby-plugin-layout',

    'gatsby-plugin-eslint',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/lib/img`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'React-Portfolio',
        short_name: 'reactapp',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/lib/img/loading.png' // This path is relative to the root of the site.
      }
    },
    //add support for absolute paths for gatsby loader
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src'
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
};
