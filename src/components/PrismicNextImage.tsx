import { css } from "@emotion/css";
import React, { useState } from "react";
import NextImage from "next/image";

import * as prismic from "@prismicio/client";

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
  image: prismic.ImageField;
  preserveAspectRatio?: boolean;
  height?: number;
  width?: number;
};
type Props = CommonProps & AspectRatioProps;

// remove query string from image url, prevents prismic from auto-formatting the img src
const removeQueryString = (url: string) => {
  const queryIndex = url.indexOf("?");
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
  const ratio =
    (image.dimensions?.width ?? 1) / (image.dimensions?.height ?? 1);

  const newWidth = width > 0 ? width : (image.dimensions?.width ?? 1);
  const newHeight = height > 0 ? height : (image.dimensions?.height ?? 1);

  // if preserveAspectRatio is true, calcualte the height from the width
  // if preserveAspectRatio is false, use the provided height

  // if height is undefined, use the image metadata height
  // if height is defined, use the provided height
  const heightValue = preserveAspectRatio ? newWidth / ratio : newHeight;

  return (
    <NextImage
      src={removeQueryString(image.url || "")}
      alt={image.alt || "Alternative Placeholder Text"}
      width={newWidth}
      height={heightValue}
      quality={100}
      placeholder="blur"
      blurDataURL="/placeholder-image.png"
    />
  );
};

export default PrismicNextImage;
