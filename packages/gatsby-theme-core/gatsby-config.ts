import { GatsbyConfig } from 'gatsby';

const gatsbyConfig: GatsbyConfig = {
  // decrease bundle size
  polyfill: false,
  siteMetadata: {
    title: 'React Portfolio',
    description: 'The React Portfolio of BlackFenix2',
    author: '@BlackFenix2'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/Shows/Details/*'] }
    },

    // add SSR support for Material-UI
    'gatsby-plugin-material-ui',
    'gatsby-plugin-layout',
    'gatsby-plugin-eslint',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `src/lib/img`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#3f51b5',
        theme_color: '#f50057',
        display: 'minimal-ui',
        icon: 'static/icon.png' // This path is relative to the root of the site.
      }
    },
    // add support for absolute paths for gatsby loader
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
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
};

// push production-only plugins
if (process.env.NODE_ENV !== 'development') {
  // push no-sourcemaps plugin when environment is not development.
  gatsbyConfig.plugins.push(`gatsby-plugin-no-sourcemaps`);
}

// needed because gatsby validation wont allow 'export default' on precompile
module.exports = gatsbyConfig;