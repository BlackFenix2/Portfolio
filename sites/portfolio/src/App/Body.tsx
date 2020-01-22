import * as React from 'react';
import { css } from '@emotion/core';
import { Box } from '@material-ui/core';
import Error from './Error';

const Body = ({ children }) => (
  <main
    css={css`
      flex-grow: 1;
    `}
  >
    <Box padding={2}>
      <Error>{children}</Error>
    </Box>
  </main>
);

export default Body;
