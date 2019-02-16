import * as React from 'react';
import Board from './Board';

export default class FlappyBird extends React.Component {
  render() {
    return (
      <div>
        <h1>Flappy Bird</h1>
        <p>Test</p>
        <Board x={2} y={3} />
      </div>
    );
  }
}
