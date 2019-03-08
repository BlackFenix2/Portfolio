import Konva from 'konva';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Circle, Group, Rect } from 'react-konva';

@observer
export default class TestShape extends React.Component<any, any> {
  @observable color: string = 'yellow';

  handleClick = () => {
    this.color = Konva.Util.getRandomColor();
  };

  render() {
    return (
      <Group onClick={this.handleClick} draggable>
        <Circle x={100} y={100} radius={50} fill={this.color} shadowBlur={5} />
        <Rect x={100} y={100} height={100} width={100} stroke={this.color} />
      </Group>
    );
  }
}
