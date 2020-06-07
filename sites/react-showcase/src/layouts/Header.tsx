import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core';

import Menu from '@material-ui/icons/Menu';
import { useStoreActions } from 'src/state/hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
);

const Head = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const setMobileOpen = useStoreActions(
    (actions) => actions.mobile.toggleMobile
  );
  const handleDrawerToggle = () => {
    setMobileOpen(true);
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

export default Head;
