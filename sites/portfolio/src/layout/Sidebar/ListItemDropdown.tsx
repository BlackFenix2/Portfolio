import {
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface ListItemDropdown {
  icon?: (props: SvgIconProps) => JSX.Element;
  label: string;
  children: React.ReactNode;
}
const ListItemDropDown: React.FC<ListItemDropdown> = (props) => {
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
