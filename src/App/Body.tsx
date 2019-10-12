import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { css } from '@emotion/core';
import Error from './Error';

const Body = ({ children }) => (
  <main
    css={css`
      flex-grow: 1;
      background-color: #f5f5f5;
    `}
  >
    <Segment basic>
      <Error>{children}</Error>
    </Segment>
  </main>
);

export default Body;
