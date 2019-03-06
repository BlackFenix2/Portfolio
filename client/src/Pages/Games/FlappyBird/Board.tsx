import * as React from 'react';
import Bird from './Bird';
import Style from './Board.style';

interface Props {
  x: number;
  y: number;
}

const viewBox = [
  window.innerWidth / -2,
  100 - window.innerHeight,
  window.innerWidth,
  window.innerHeight
];
const Board: React.StatelessComponent<Props> = props => (
  <>
    <svg viewBox={viewBox.toString()} className="DebugOutline">
      {props.children}
    </svg>
    <Style />
  </>
);

export default Board;
