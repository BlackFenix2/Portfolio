import Konva from 'konva';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Circle, Group, Image, Rect } from 'react-konva';
import useImage from 'use-image';

const Pipe = props => {
  const [image] = useImage(
    'http://jimmyoliva.herokuapp.com/images/pipeNorth.png'
  );
  return (
    <Image
      x={props.x}
      y={props.y}
      width={50}
      height={240}
      image={image}
      scaleY={props.rotate ? -1 : 1}
      stroke="Red"
    />
  );
};

export default Pipe;
