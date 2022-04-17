import * as React from 'react';
import { Box } from '@mui/material';
import { css } from '@emotion/css';
import Error from './Error';

const Body = ({ children }) => (
  <Box
    className={css`
      padding: 16px;
    `}
  >
    <Error>{children}</Error>
  </Box>
);

export default Body;
