import Konva from 'konva';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Circle, Group, Image, Rect } from 'react-konva';
import useImage from 'use-image';

const Pipe = props => {
  const [image] = useImage('/src/lib/img/FlappyBird/Pipe.png');
  return (
    <Image
      x={props.x}
      y={props.y}
      image={image}
      scaleY={props.rotate ? -1 : 1}
      stroke="Red"
    />
  );
};

export default Pipe;
