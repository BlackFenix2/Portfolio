import * as React from 'react';
import styles from './Board.module.css';

const Board = props => (
  <div className={styles.game}>
    <div
      role="presentation"
      className={styles.board}
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
