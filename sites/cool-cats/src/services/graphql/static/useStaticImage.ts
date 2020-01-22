import { useStaticQuery, graphql } from 'gatsby';

const useStaticImage = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "cat-banner.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return image.childImageSharp.fluid;
};

export default useStaticImage;
