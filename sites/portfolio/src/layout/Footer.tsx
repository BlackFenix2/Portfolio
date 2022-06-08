import React from 'react';
import {
  Paper,
  Grid,
  IconButton,
  Tooltip,
  Box,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        href="https://www.linkedin.com/in/ernie-francis"
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
  <Paper square>
    <Box paddingTop={2}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Feel free to reach out!</Typography>
        <Icons />
        <CopyRight />
      </Grid>
    </Box>
  </Paper>
);

export default Foot;
