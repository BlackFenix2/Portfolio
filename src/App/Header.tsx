import * as React from 'react';
import { css } from '@emotion/core';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  useTheme
} from '@material-ui/core';

import Menu from '@material-ui/icons/Menu';
import { useStoreActions } from 'src/state/hooks';
import Nav from './Nav';

const Head = () => (
  <header>
    <Nav />
  </header>
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  })
);

const MaterialHead = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const setMobileOpen = useStoreActions(actions => actions.mobile.toggleMobile);
  const handleDrawerToggle = () => {
    setMobileOpen();
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          Placeholder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MaterialHead;
