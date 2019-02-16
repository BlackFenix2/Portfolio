import * as React from 'react';

interface Props {
  x: number;
  y: number;
}

const Board: React.StatelessComponent<Props> = props => (
  <>
    <svg className="DebugOutline">
      <div className="Board" />
      <path
        d="M 20 20 C 20 110, 110 110, 110 20"
        stroke="black"
        fill="transparent"
      />
    </svg>
    <style jsx>{`
      .Board {
        width: 800px;
        height: 600px;
        position: relative;
        margin: 0 auto;
        background-color: #000;
        background-image: linear-gradient(#333 1px, transparent 1px),
          linear-gradient(90deg, #333 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .DebugOutline {
        border: 1px solid black;
      }
    `}</style>
  </>
);

export default Board;
