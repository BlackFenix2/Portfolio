import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Circle, Group, Image, Rect } from 'react-konva';
import useImage from 'use-image';

const Pipe = props => {
  const [image] = useImage(
    props.rotate
      ? 'http://jimmyoliva.herokuapp.com/images/pipeSouth.png'
      : 'http://jimmyoliva.herokuapp.com/images/pipeNorth.png'
  );

  return (
    <Image
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      image={image}
      stroke={props.debug ? 'Red' : ''}
    />
  );
};

export default Pipe;
