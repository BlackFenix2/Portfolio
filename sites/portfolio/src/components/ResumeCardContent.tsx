import React from 'react';
import { List, ListItem } from '@mui/material';

interface Props {
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
