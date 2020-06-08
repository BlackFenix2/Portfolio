import * as React from 'react';
import { css } from '@emotion/core';

const Card = (props) => (
  <div
    css={css`
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 4px 20px 0 rgba(0, 0, 0, 0.19);
    `}
  >
    {props.children}
  </div>
);

export default Card;
