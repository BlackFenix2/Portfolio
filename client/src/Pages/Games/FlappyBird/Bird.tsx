import * as React from 'react';
import { Image } from 'react-konva';

import useImage from 'use-image';

const Bird = props => {
  const [image] = useImage('http://jimmyoliva.herokuapp.com/images/bird.png');
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
