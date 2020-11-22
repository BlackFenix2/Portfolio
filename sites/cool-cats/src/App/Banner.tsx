import React from 'react';
import { css } from '@emotion/react';

import BackgroundImage from 'gatsby-background-image';
import useStaticImage from 'src/services/graphql/static/useStaticImage';

const Banner = () => {
  const staticImage = useStaticImage();

  return (
    <BackgroundImage
      fluid={staticImage}
      css={css`
        height: 200px;
      `}
    />
  );
};

export default Banner;
