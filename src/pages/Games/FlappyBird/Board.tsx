import { inject } from 'mmlpx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Stage } from 'react-konva';
import BirdStore from 'src/state/stores/games/birdStore';
import Background from './Background';
import Bird from './Bird';
import PipeList from './PipeList';

interface Props {
  height: number;
  width: number;
  debug?: boolean;
}

@observer
class Board extends React.Component<Props> {
  @inject() BirdStore: BirdStore;

  render() {
    return (
      <Stage width={this.props.width} height={this.props.height}>
        <Layer>
          <Background width={this.props.width} height={this.props.height} />

          <Bird
            x={this.BirdStore.Bird.x}
            y={this.BirdStore.Bird.y}
            rotation={this.BirdStore.Bird.rotation}
            debug={this.props.debug}
          />

          <PipeList list={this.BirdStore.PipeList} debug={this.props.debug} />
        </Layer>
      </Stage>
    );
  }
}

export default Board;
