import * as React from 'react';
import { css, Global } from '@emotion/core';

const mainSize = 33.333;
const boardSize = 250;

const style = css`
  :root {
    --main-size: 33.333%;
    --board-size: 250px;
    --font-size: 80px;
  }
  .game {
    margin: auto;
    width: var(--board-size);
    height: var(--board-size);
  }
  .board {
    width: 100%;
    height: 100%;
    display: inline-grid;
    grid-template-columns: repeat(3, var(--main-size));
    grid-template-rows: repeat(3, var(--main-size));
  }
  .board > div {
    overflow: hidden;
    border: 2px solid black;
    font-size: var(--font-size);
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
  }
  .board > div:hover {
    background-color: lightgray;
  }
  .board > div:nth-of-type(-n + 3) {
    border-top: 0;
  }
  .board > div:nth-of-type(3n + 1) {
    border-left: 0;
  }
  .board > div:nth-of-type(3n) {
    border-right: 0;
  }
  .board > div:nth-last-of-type(-n + 3) {
    border-bottom: 0;
  }
  .board > div:first-of-type {
    border-radius: 20px 0 0 0;
  }
  .board > div:nth-of-type(3) {
    border-radius: 0 20px 0 0;
  }
  .board > div:nth-of-type(7) {
    border-radius: 0 0 0 20px;
  }
  .board > div:nth-of-type(9) {
    border-radius: 0 0 20px 0;
  }
  @media screen and (min-width: 767px) {
    :root {
      --main-size: 33.333%;
      --board-size: 30vmax;
      --font-size: 10vmax;
    }
  }
`;

// TODO remove Global juryrig
const Board = (props) => (
  <>
    <Global styles={style} />
    <div className="game">
      <div
        role="presentation"
        className="board"
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
  </>
);

export default Board;
