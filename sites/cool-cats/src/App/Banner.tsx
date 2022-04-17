import React from 'react';
import { css } from '@emotion/css';

import BackgroundImage from 'gatsby-background-image';
import { StaticImage } from 'gatsby-plugin-image';
import useStaticImage from 'src/services/graphql/static/useStaticImage';

const Banner = () => {
  const staticImage = useStaticImage();

  return (
    <BackgroundImage
      {...staticImage}
      alt="banner"
      className={css`
        height: 200px;
      `}
    />
  );
};

export default Banner;
