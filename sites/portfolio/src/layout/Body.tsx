import * as React from 'react';
import { Box } from '@mui/material';
import Error from './Error';

const Body = ({ children }) => (
  <Box>
    <Error>{children}</Error>
  </Box>
);

export default Body;
