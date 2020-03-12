import React from 'react';
import { css } from 'linaria';

import BackgroundImage from 'gatsby-background-image';
import useStaticImage from 'src/services/graphql/static/useStaticImage';

const Banner = () => {
  const staticImage = useStaticImage();

  return (
    <BackgroundImage
      fluid={staticImage}
      className={css`
        height: 200px;
      `}
    />
  );
};

export default Banner;
