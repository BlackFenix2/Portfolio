import * as React from 'react';



const Board = props => (
  <div id="game">
    <div
      role="presentation"
      id="board"
      onClick={props.clicked}
      onKeyUp={props.clicked}
    >
      {props.gameBoard.map((value, i) => (
        <div key={i} data-square={i}>
          {value}
        </div>
      ))}
    </div>
  </div>
);

export default Board;
