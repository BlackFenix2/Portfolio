import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Layer, Rect, Stage, Text } from 'react-konva';
import Background from './Background';
import Bird from './Bird';
import InputUtility from './InputUtility';
import Pipe from './Pipe';

interface Props {
  height: number;
  width: number;
}

@observer
class Board extends React.Component<Props> {
  @observable input = new InputUtility();

  componentDidMount() {
    this.input.bindKeys();
  }

  componentWillUnmount() {
    this.input.unBindKeys();
  }

  PointEvent = () => {
    console.log('Flappy Flap!');
  };

  render() {
    return (
      <Stage
        width={this.props.width}
        height={this.props.height}
        onTouchStart={this.PointEvent}
        onClick={this.PointEvent}
      >
        <Layer>
          <Background width={this.props.width} height={this.props.height} />
          <Bird x={30} y={100} />
          <Pipe x={300} />
          <Pipe x={300} y={550} rotate />
        </Layer>
      </Stage>
    );
  }
}

export default Board;
