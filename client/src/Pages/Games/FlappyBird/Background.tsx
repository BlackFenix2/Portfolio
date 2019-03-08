import * as React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Background = props => {
  const [image] = useImage('/src/lib/img/FlappyBird/Background.png');
  return <Image width={props.width} height={props.height} image={image} />;
};

export default Background;
