import {
  ListItemIcon,
  ListItemText,
  useTheme,
  makeStyles,
  Theme,
  createStyles,
  Divider,
  List,
  ListItem,
  Hidden,
  Drawer,
  Collapse
} from '@material-ui/core';
import { Home, ExpandLess, ExpandMore } from '@material-ui/icons';

import React from 'react';
import { useStoreState, useStoreActions } from 'src/state/hooks';
import { Link } from 'gatsby';

const drawerWidth = 200;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

const ResponsiveDrawer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={classes.toolbar}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItem>
        </List>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/Todo">
          <ListItemText primary="Todo" />
        </ListItem>
        <ListItem button component={Link} to="/Shows">
          <ListItemText primary="Shows" />
        </ListItem>

        <ListItem button component={Link} to="/Domain">
          <ListItemText primary="Domain" />
        </ListItem>

        <ListItem button component={Link} to="/Cats">
          <ListItemText primary="Cats" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Games" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItem
              button
              component={Link}
              to="/Games/TicTacToe"
              className={classes.nested}
            >
              <ListItemText primary="Tic-Tac-Toe" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Games/FlappyBird"
              className={classes.nested}
            >
              <ListItemText primary="Flappy Bird" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText primary="end" />
        </ListItem>
      </List>
    </div>
  );
};

const SideBar = () => {
  const mobileOpen = useStoreState(state => state.mobile.isMobile);
  const setMobileOpen = useStoreActions(actions => actions.mobile.toggleMobile);
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleDrawerToggle = () => {
    setMobileOpen();
  };
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <ResponsiveDrawer />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <ResponsiveDrawer />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideBar;
