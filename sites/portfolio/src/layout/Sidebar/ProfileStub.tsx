import React from 'react';
import { Box, Avatar, Typography, Link } from '@material-ui/core';
import { css } from '@emotion/react';

const ProfileStub = () => {
  return (
    <>
      <Avatar
        css={css`
          height: 80px !important;
          width: 80px !important;
          & > img {
            height: 100%;
            width: 100%;
          }
        `}
        src="https://scontent.fhyw1-1.fna.fbcdn.net/v/t1.0-1/c0.15.200.200a/p200x200/106062113_3175669245828266_3672354469913012972_n.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=Iu8ZY2kynMkAX_3i3oV&_nc_ht=scontent.fhyw1-1.fna&tp=27&oh=63675d89c547d51aa0100d9d5bff1650&oe=5FDFA50A"
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
