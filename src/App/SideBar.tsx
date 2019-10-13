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
import {
  Home,
  ExpandLess,
  ExpandMore,
  List as ListIcon,
  VideogameAsset,
  Pets,
  Movie,
  Domain
} from '@material-ui/icons';

import React from 'react';
import { useStoreState, useStoreActions } from 'src/state/hooks';
import { Link } from 'gatsby';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

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

interface ListItemLinkProps {
  to: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  label: string;
  className?: string;
}
const ListItemLink: React.FC<ListItemLinkProps> = props => (
  <ListItem button component={Link} to={props.to} className={props.className}>
    {props.icon && (
      <ListItemIcon>
        <props.icon />
      </ListItemIcon>
    )}
    <ListItemText primary={props.label} />
  </ListItem>
);

interface ListItemDropdown {
  icon?: (props: SvgIconProps) => JSX.Element;
  label: string;
}
const ListItemDropDown: React.FC<ListItemDropdown> = props => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        {props.icon && (
          <ListItemIcon>
            <props.icon />
          </ListItemIcon>
        )}
        <ListItemText primary={props.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>{props.children}</List>
      </Collapse>
    </>
  );
};

const ResponsiveDrawer = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div>
      <div className={classes.toolbar}>
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
          <ResponsiveDrawer onDismiss={handleDrawerToggle} />
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
