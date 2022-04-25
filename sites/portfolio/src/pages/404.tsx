import { Box, Typography } from '@mui/material';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

import Link from 'next/link';

/**
 * makes a single char of a string uppercase
 * @param str string to be uppercased
 * @param index index of the char to be uppercased
 * @returns string with the char at index uppercased
 */
const toUppercaseFirst = (str: string, index: number) => {
  return str.charAt(index).toUpperCase() + str.slice(index + 1);
};

export default function Custom404(props: any) {
  const router = useRouter();

  const newPath = toUppercaseFirst(router.asPath, 1);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h1"
          sx={{
            paddingRight: 4,
            borderRight: '1px solid',
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            marginLeft: 4,
          }}
        >
          Page not found
        </Typography>
      </Box>
      <p>
        you tried to search for {router.asPath}, did you mean to search for{' '}
        <Link href={newPath}>{newPath}</Link>?
      </p>
    </Box>
  );
}
