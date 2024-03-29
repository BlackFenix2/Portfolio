import { GatsbyConfig } from 'gatsby';

const gatsbyConfig: GatsbyConfig = {
  // decrease bundle size
  // polyfill: false,
  siteMetadata: {
    title: 'Placeholder Title',
    description: 'The placeholder in gatsby-theme-core',
    author: '@BlackFenix2',
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-eslint',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',

    // disabling image plugin for known issue at https://github.com/gatsbyjs/gatsby/issues/30516
    //'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-plugin-image'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Placeholder',
        short_name: 'Placeholder',
        start_url: '/',
        background_color: '#3f51b5',
        theme_color: '#f50057',
        display: 'minimal-ui',
        icon: 'static/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    // add support for absolute paths for gatsby loader
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src',
        },
      },
    },
  ],
};

// push production-only plugins
if (process.env.NODE_ENV !== 'development') {
  // push no-sourcemaps plugin when environment is not development.
  gatsbyConfig.plugins.push(`gatsby-plugin-no-sourcemaps`);
}

// needed because gatsby validation wont allow 'export default' on precompile
export default gatsbyConfig;
