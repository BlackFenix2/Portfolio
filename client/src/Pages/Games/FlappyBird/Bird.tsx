import Konva from 'konva';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Circle, Group, Image, Rect } from 'react-konva';
import useImage from 'use-image';

const Bird = props => {
  const [image] = useImage('/src/lib/img/FlappyBird/bird.png');
  return <Image x={props.x} y={props.y} image={image} draggable stroke="Red" />;
};

export default Bird;
