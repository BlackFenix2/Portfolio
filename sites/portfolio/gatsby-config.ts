import { GatsbyConfig } from 'gatsby';

export default {
  plugins: [
    'gatsby-theme-core',
    // client path for showlist
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/Shows/Details/*'] }
    }
  ]
} as GatsbyConfig;
