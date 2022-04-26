import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Signature from 'src/components/Signature';
import NextLink from 'next/link';

const Index: React.FC = () => {
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2">Ernie Francis</Typography>
      <Typography variant="subtitle2">
        IT Enthauist / self-taught software developer
      </Typography>

      <Signature width={300} height={300} />

      {/* <ThreeBackground /> */}
      <Box style={{ padding: '2px' }} mt={2} display="flex" flexDirection="row">
        <Box paddingX={5}>
          <NextLink passHref href="/Projects">
            <Button variant="contained">My Projects</Button>
          </NextLink>
        </Box>
        <Box paddingX={5}>
          <NextLink passHref href="/Resume">
            <Button variant="contained">My Resume</Button>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
