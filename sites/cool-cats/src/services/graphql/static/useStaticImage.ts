import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

const useStaticImage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "cat-banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);
  return bgImage;
};

export default useStaticImage;
