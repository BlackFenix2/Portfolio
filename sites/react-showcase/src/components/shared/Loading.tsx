import * as React from 'react';
import { Container, CircularProgress } from '@mui/material';

const Loading = () => (
  <Container>
    <h2>Loading now</h2>
    <CircularProgress color="inherit" variant="indeterminate" />
  </Container>
);

export default Loading;
