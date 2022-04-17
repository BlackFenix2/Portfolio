import * as React from 'react';
import { ListItem, List, ListItemText } from '@mui/material';

interface Props {
  items: string[];
}
const LocalList: React.FC<Props> = (props) => (
  <List>
    {props.items.map((item, index) => (
      <ListItem key={index}>
        <ListItemText>{item}</ListItemText>
      </ListItem>
    ))}
  </List>
);

export default LocalList;
