import {
  useTheme,
  makeStyles,
  createStyles,
  Divider,
  List,
  Hidden,
  Drawer,
  Theme
} from '@material-ui/core';
import {
  Home,
  List as ListIcon,
  VideogameAsset,
  Pets,
  Movie,
  Domain,
  Gavel
} from '@material-ui/icons';

import React from 'react';
import { useStoreState, useStoreActions } from 'src/state/hooks';
import ListItemLink from './ListItemLink';
import ListItemDropDown from './ListItemDropdown';

const drawerWidth = 200;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    // toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

const ResponsiveDrawer = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div>
      <div className={classes.drawer}>
        <List>
          <ListItemLink to="/" icon={Home} label="HomePage" />
        </List>
      </div>
      <Divider />
      <List>
        <ListItemLink to="/Todo" icon={ListIcon} label="Todo" />

        <ListItemLink to="/Shows" icon={Movie} label="Shows" />

        <ListItemLink to="/Domain" icon={Domain} label="Domain" />

        <ListItemLink to="/Cats" icon={Pets} label="Cats" />

        <ListItemDropDown icon={VideogameAsset} label="Games">
          <ListItemLink
            to="/Games/TicTacToe"
            label="Tic-Tac-Toe"
            className={classes.nested}
          />

          <ListItemLink
            to="/Games/FlappyBird"
            label="Flappy Bird"
            className={classes.nested}
          />
        </ListItemDropDown>

        <ListItemLink icon={Gavel} to="/License" label="License" />
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
    setMobileOpen(false);
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
