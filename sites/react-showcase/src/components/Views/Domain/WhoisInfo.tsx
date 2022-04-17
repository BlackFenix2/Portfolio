import * as React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { IWhoisRecord } from './domainRecords';
import LocalList from './List';

interface Props {
  whois: IWhoisRecord;
}

const WhoisInfo: React.FC<Props> = ({ whois }) => (
  <List>
    <ListItem divider>
      <ListItemText>
        Created Date: {new Date(whois.created).toDateString()}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Expiration Date: {new Date(whois.expired).toDateString()}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Name Servers: <LocalList items={whois.nameservers} />
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Domain Status: <LocalList items={whois.domainStatus} />
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Admin E-mail:
        {whois.admin.email}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        Registrant E-mail:
        {whois.registrant.email}
      </ListItemText>
    </ListItem>
  </List>
);

export default WhoisInfo;
