import * as React from 'react';
import { css } from '@emotion/css';

const gameStyle = css`
  @media screen and (min-width: 767px) {
    width: 30vmax;
    height: 30vmax;
  }
  margin: auto;
  width: 250px;
  height: 250px;
`;

const boardStyle = css`
  :root {
    --board-size: 250px;
    --font-size: 80px;
  }
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: repeat(3, 33.333%);
  grid-template-rows: repeat(3, 33.333%);

  > div {
    overflow: hidden;
    border: 2px solid black;
    font-size: 80px;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    @media screen and (min-width: 767px) {
      font-size: 10vmax;
    }
    :hover {
      background-color: lightgray;
    }
    :nth-of-type(-n + 3) {
      border-top: 0;
    }
    :nth-of-type(3n + 1) {
      border-left: 0;
    }
    :nth-of-type(3n) {
      border-right: 0;
    }
    :nth-last-of-type(-n + 3) {
      border-bottom: 0;
    }
    :first-of-type {
      border-radius: 20px 0 0 0;
    }
    :nth-of-type(3) {
      border-radius: 0 20px 0 0;
    }
    :nth-of-type(7) {
      border-radius: 0 0 0 20px;
    }
    :nth-of-type(9) {
      border-radius: 0 0 20px 0;
    }
  }
`;

// TODO remove Global juryrig
const Board = (props) => (
  <div className={gameStyle}>
    <div
      role="presentation"
      className={boardStyle}
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
