import { observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Stage } from 'react-konva';
import birdStore from 'src/state/stores/games/birdStore';
import Background from './Background';
import Bird from './Bird';
import PipeList from './PipeList';

interface Props {
  height: number;
  width: number;
  debug?: boolean;
}

const Board = observer((props: Props) => {
  const BirdStore = React.useContext(birdStore);

  return (
    <Stage width={props.width} height={props.height}>
      <Layer>
        <Background width={props.width} height={props.height} />

        <Bird
          x={BirdStore.Bird.x}
          y={BirdStore.Bird.y}
          rotation={BirdStore.Bird.rotation}
          debug={props.debug}
        />

        <PipeList list={BirdStore.PipeList} debug={props.debug} />
      </Layer>
    </Stage>
  );
});

export default Board;
