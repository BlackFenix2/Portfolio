import { GatsbyConfig } from 'gatsby';

const gatsbyConfig: GatsbyConfig = {
  // decrease bundle size
  polyfill: false,
  siteMetadata: {
    title: 'React Portfolio',
    description: 'The react portfolio of BlackFenix2',
    author: '@BlackFenix2'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/Shows/Details/*'] }
    },
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
        name: 'itops',
        short_name: 'itops',
        start_url: '/',
        background_color: '#90ca43',
        theme_color: '#1276bb',
        display: 'minimal-ui',
        icon: 'static/loading.png' // This path is relative to the root of the site.
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

// push no-sourcemaps plugin when environment is not development.
if (process.env.NODE_ENV !== 'development') {
  gatsbyConfig.plugins.push(`gatsby-plugin-no-sourcemaps`);
}

// needed because gatsby validation wont allow 'export default' on precompile
module.exports = gatsbyConfig;
