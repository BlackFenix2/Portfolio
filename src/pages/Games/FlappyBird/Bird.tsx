import * as React from 'src/pages/Games/FlappyBird/node_modules/react';
import { Image } from 'src/pages/Games/FlappyBird/node_modules/react-konva';

import useImage from 'src/pages/Games/FlappyBird/node_modules/use-image';

const Bird = props => {
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
