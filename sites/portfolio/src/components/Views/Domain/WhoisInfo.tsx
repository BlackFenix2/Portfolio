import * as React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { IWhoisRecord } from './domainRecords';
import LocalList from './List';

const WhoisInfo: React.SFC<IWhoisRecord> = props => (
  <List>
    <ListItem divider>
      <ListItemText>
        Created Date: {new Date(props.created).toDateString()}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Expiration Date: {new Date(props.expired).toDateString()}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Name Servers: <LocalList items={props.nameservers} />
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Domain Status: <LocalList items={props.domainStatus} />
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Admin E-mail:
        {props.admin.email}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        Registrant E-mail:
        {props.registrant.email}
      </ListItemText>
    </ListItem>
  </List>
);

export default WhoisInfo;
