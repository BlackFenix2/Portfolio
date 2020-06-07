import * as React from 'react';
import { ListItem, List, ListItemText } from '@material-ui/core';

interface IProps {
  items: string[];
}
const LocalList: React.FC<IProps> = (props) => (
  <List>
    {props.items.map((x, i) => (
      <ListItem key={i}>
        <ListItemText>{x}</ListItemText>
      </ListItem>
    ))}
  </List>
);

export default LocalList;
