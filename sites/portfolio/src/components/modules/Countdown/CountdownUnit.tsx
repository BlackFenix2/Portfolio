import React from 'react';
import { css } from '@emotion/core';
import { FlipCard } from './FlipCard';

const border = css`
  border-radius: 25%;
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.15);
  padding: 20px;
  margin: 10px;
  text-align: center;
  background-color: lightblue;
  width: 160px;
  height: 130px;
`;

const CountdownUnit = (props: { time: number; label: string }) => {
  return (
    <div css={border}>
      <h3
        css={css`
          margin: 0;
        `}
      >
        {props.label}
      </h3>
      <div
        css={css`
          position: relative;
          height: 100%;
          overflow: hidden;
        `}
      >
        <FlipCard time={props.time} />
      </div>
    </div>
  );
};

export default React.memo(CountdownUnit);
