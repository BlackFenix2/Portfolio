import React from 'react';
import { Paper, Grid, IconButton, Tooltip, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Icons = () => (
  <div>
    <Tooltip title="Github Repo" enterDelay={300}>
      <IconButton
        component="a"
        href="https://github.com/BlackFenix2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Facebook Page" enterDelay={300}>
      <IconButton
        component="a"
        href="https://www.facebook.com/ernie.francis.9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Linkedin Page" enterDelay={300}>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/ernie-francis-0a9795163/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  </div>
);

const CopyRight = () => (
  <div>
    <span>
      Ernie Francis &copy;
      {new Date().getFullYear()}
    </span>
  </div>
);

const Foot = () => (
  <footer>
    <Paper square>
      <Box paddingTop={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icons />
          <CopyRight />
        </Grid>
      </Box>
    </Paper>
  </footer>
);

export default Foot;
