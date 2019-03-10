import * as React from 'react';
import { Circle, Group, Image, Rect } from 'react-konva';

import useImage from 'use-image';

const Bird = props => {
  const [image] = useImage('http://jimmyoliva.herokuapp.com/images/bird.png');
  return <Image x={props.x} y={props.y} width={40} height={30} image={image} />;
};

export default Bird;
