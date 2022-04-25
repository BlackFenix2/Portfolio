import { css } from '@emotion/css';
import React, { useState } from 'react';
import NextImage from 'next/image';

import * as prismicT from '@prismicio/types';

type AspectRatioProps =
  | {
      preserveAspectRatio: true;
      height?: never;
    }
  | {
      preserveAspectRatio?: false;
      height?: number;
    };

type CommonProps = {
  image: prismicT.ImageField;
  preserveAspectRatio?: boolean;
  height?: number;
  width?: number;
};
type Props = CommonProps & AspectRatioProps;

// remove query string from image url, prevents prismic from auto-formatting the img src
const removeQueryString = (url: string) => {
  const queryIndex = url.indexOf('?');
  if (queryIndex !== -1) {
    return url.substring(0, queryIndex);
  }
  return url;
};

const PrismicNextImage: React.FC<Props> = ({
  height,
  width,
  image,
  preserveAspectRatio,
}) => {
  // get aspect ratio from image metadata
  const ratio = image.dimensions.width / image.dimensions.height;

  // if preserveAspectRatio is true, calcualte the height from the width
  // if preserveAspectRatio is false, use the provided height

  // if height is undefined, use the image metadata height
  // if height is defined, use the provided height
  const heightValue = preserveAspectRatio
    ? width / ratio
    : height
    ? height
    : image.dimensions.height;

  return (
    <NextImage
      src={removeQueryString(image.url)}
      alt={image.alt}
      width={width ? width : image.dimensions.width}
      height={heightValue}
      quality={100}
    />
  );
};

export default PrismicNextImage;
