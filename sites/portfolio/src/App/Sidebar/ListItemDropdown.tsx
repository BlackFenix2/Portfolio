import {
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  Collapse
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

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

export default ListItemDropDown;
