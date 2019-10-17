import { useStaticQuery, graphql } from 'gatsby';

interface Site {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

const SITEMETADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const useSiteMetadata = () => {
  const { site } = useStaticQuery<Site>(SITEMETADATA_QUERY);

  return site.siteMetadata;
};

export default useSiteMetadata;
