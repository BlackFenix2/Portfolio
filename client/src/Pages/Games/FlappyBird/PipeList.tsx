import { observer } from 'mobx-react';
import React from 'react';

import Pipe from 'src/state/objects/pipe';

import { default as RenderPipe } from './Pipe';

interface Props {
  list: Pipe[];
}

const PipeList = (props: Props) => {
  const listItems = props.list.map((PipeItem, index) => (
    <RenderPipe key={index} x={PipeItem.x} y={PipeItem.y} />
  ));
  return listItems;
};

export default PipeList;
