import React from 'react';
import { Box, Avatar, Typography, Link } from '@mui/material';
import { css } from '@emotion/css';

const ProfileStub = () => {
  return (
    <>
      <Avatar
        className={css`
          height: 80px !important;
          width: 80px !important;
          & > img {
            height: 100%;
            width: 100%;
          }
        `}
        alt="Profile image"
        src="/avatar.jpg"
      />
      <Box paddingBottom={2} />
      <Typography variant="h6" component="h2" gutterBottom>
        Ernie Francis
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Link href="mailto:Devin_98@msn.com">Devin_98@msn.com</Link>
      </Typography>
    </>
  );
};

export default ProfileStub;
