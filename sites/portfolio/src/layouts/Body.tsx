import * as React from 'react';
import { css } from 'linaria';
import { Box } from '@material-ui/core';
import Error from './Error';

const Body = ({ children }) => (
  <main
    className={css`
      flex-grow: 1;
    `}
  >
    <Box padding={2}>
      <Error>{children}</Error>
    </Box>
  </main>
);

export default Body;
