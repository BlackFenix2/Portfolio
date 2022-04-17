import React from 'react';
import { Paper, Grid, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Icons = () => (
  <div>
    <Tooltip title="Github Repo" enterDelay={300}>
      <IconButton
        component="a"
        href="https://github.com/BlackFenix2/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
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
      <Grid container direction="column" justify="center" alignItems="center">
        <Icons />
        <CopyRight />
      </Grid>
    </Paper>
  </footer>
);

export default Foot;
