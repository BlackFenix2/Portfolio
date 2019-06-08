import * as React from 'react';

import { Group } from 'react-konva';
import Pipe from './Pipe';

const PipeList = props =>
  props.list.map((PipeColumn, index) => (
    <Group key={index}>
      <Pipe
        x={PipeColumn.NorthPipe.x}
        y={PipeColumn.NorthPipe.y}
        debug={props.debug}
      />
      <Pipe
        rotate
        x={PipeColumn.SouthPipe.x}
        y={PipeColumn.SouthPipe.y}
        debug={props.debug}
      />
    </Group>
  ));

export default PipeList;
