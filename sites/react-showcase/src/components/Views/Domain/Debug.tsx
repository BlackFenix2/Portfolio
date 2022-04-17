import * as React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface Props {
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const Debug: React.FC<Props> = (props) => (
  <List>
    <ListItem divider>
      <ListItemText>
        Loading:
        {String(props.loading)}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Error:
        {String(props.error)}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        Error Message:
        {String(props.errorMessage)}
      </ListItemText>
    </ListItem>
  </List>
);

export default Debug;
