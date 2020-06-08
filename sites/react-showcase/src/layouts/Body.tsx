import * as React from 'react';
import { Box } from '@material-ui/core';
import { css } from '@emotion/core';
import Error from './Error';

const Body = ({ children }) => (
  <Box
    css={css`
      padding: 16px;
    `}
  >
    <Error>{children}</Error>
  </Box>
);

export default Body;
