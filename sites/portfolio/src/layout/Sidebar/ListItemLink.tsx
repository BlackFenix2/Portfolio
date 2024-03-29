import React from 'react';

import { SvgIconProps } from '@mui/material/SvgIcon';

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'src/components/Link';

interface ListItemLinkProps {
  to: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  label: string;
  className?: string;
}
const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  return (
    <ListItem
      button
      component={Link}
      href={props.to}
      className={props.className}
    >
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
