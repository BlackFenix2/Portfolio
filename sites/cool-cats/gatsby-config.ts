import { GatsbyConfig } from 'gatsby';

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Cool Cats',
    description: "Chris P's cool cats with swag",
    author: '@BlackFenix2',
  },
  plugins: [
    'gatsby-theme-core',
    // '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/lib/img',
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },

        modifyVars: {
          'text-color': 'rgba(0, 0, 0)',
        },
      },
    },
  ],
};
export default gatsbyConfig;
