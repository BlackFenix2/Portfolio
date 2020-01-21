import * as React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Background = props => {
  const [image] = useImage(
    'https://raw.githubusercontent.com/olivajames110/jimmyoliva/master/pages/projects/flappy_bird/images/bg.png'
  );
  return <Image width={props.width} height={props.height} image={image} />;
};

export default Background;
