import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Index: React.FC = () => {
  return (
    <Box p={2}>
      <Typography variant="h2">Ernie Francis</Typography>
      <Typography variant="subtitle2">
        IT Enthauist / self-taught(ish) backend developer
      </Typography>

      <p>Hi there, this is my placeholder site for Ernie Francis.</p>

      <p>
        untill i can show off my UI/UX, enjoy this shameless{' '}
        <Link href="https://mui-treasury.com/">Material UI</Link> copy
      </p>
    </Box>
  );
};

export default Index;
