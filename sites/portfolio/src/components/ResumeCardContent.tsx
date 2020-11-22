import React from 'react';
import { List, ListItem } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  items: string[];
}

const ResumeCardContent: React.FC<Props> = (props) => (
  <List>
    {props.items.map((item) => {
      return (
        <ListItem key={item} divider>
          {item}
        </ListItem>
      );
    })}
  </List>
);

export default ResumeCardContent;
