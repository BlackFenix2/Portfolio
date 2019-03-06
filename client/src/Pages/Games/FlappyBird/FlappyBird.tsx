import * as React from 'react';
import Bird from './Bird';
import Board from './Board';

export default class FlappyBird extends React.Component {
  render() {
    return (
      <>
        <Board x={20} y={30}>
          <Bird x={100} y={100} size={50} />
        </Board>
      </>
    );
  }
}
