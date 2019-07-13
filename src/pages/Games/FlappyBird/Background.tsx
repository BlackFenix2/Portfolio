import * as React from 'src/pages/Games/FlappyBird/node_modules/react';
import { Image } from 'src/pages/Games/FlappyBird/node_modules/react-konva';
import useImage from 'src/pages/Games/FlappyBird/node_modules/use-image';

const Background = props => {
  const [image] = useImage(
    'https://raw.githubusercontent.com/olivajames110/jimmyoliva/master/pages/projects/flappy_bird/images/bg.png'
  );
  return <Image width={props.width} height={props.height} image={image} />;
};

export default Background;
