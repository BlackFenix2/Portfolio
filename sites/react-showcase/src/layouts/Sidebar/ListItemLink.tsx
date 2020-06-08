import React from 'react';

import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'gatsby';

interface ListItemLinkProps {
  to: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  label: string;
  className?: string;
}
const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  return (
    <ListItem button component={Link} to={props.to} className={props.className}>
      {props.icon && (
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
      )}
      <ListItemText primary={props.label} />
    </ListItem>
  );
};

export default ListItemLink;
