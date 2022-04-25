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
  height = -1,
  width = -1,
  image,
  preserveAspectRatio,
}) => {
  // get aspect ratio from image metadata
  const ratio = image.dimensions.width / image.dimensions.height;

  const newWidth = width > 0 ? width : image.dimensions.width;
  const newHeight = height > 0 ? height : image.dimensions.height;

  // if preserveAspectRatio is true, calcualte the height from the width
  // if preserveAspectRatio is false, use the provided height

  // if height is undefined, use the image metadata height
  // if height is defined, use the provided height
  const heightValue = preserveAspectRatio ? newWidth / ratio : newHeight;

  return (
    <NextImage
      src={removeQueryString(image.url)}
      alt={image.alt}
      width={newWidth}
      height={heightValue}
      quality={100}
      placeholder="blur"
      blurDataURL="/placeholder-image.png"
    />
  );
};

export default PrismicNextImage;
