import * as React from 'react';
import { Image } from 'react-konva';

import useImage from 'use-image';

const Bird = (props) => {
  const [image] = useImage(
    'https://raw.githubusercontent.com/olivajames110/jimmyoliva/master/pages/projects/flappy_bird/images/bird.png'
  );
  return (
    <Image
      x={props.x}
      y={props.y}
      width={40}
      height={30}
      image={image}
      rotation={props.rotation * -10}
      stroke={props.debug ? 'Red' : ''}
    />
  );
};

export default Bird;
