import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Paper, Grid } from '@material-ui/core';

const Icons = () => (
  <div>
    <a
      title="GitHub"
      href="https://github.com/BlackFenix2/Portfolio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon color="black" link name="github" size="big" />
    </a>
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
    <Paper>
      <Grid container direction="column" justify="center" alignItems="center">
        <Icons />
        <CopyRight />
      </Grid>
    </Paper>
  </footer>
);

export default Foot;
