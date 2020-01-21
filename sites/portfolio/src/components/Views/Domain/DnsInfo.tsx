import * as React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { IDnsRecord } from './domainRecords';
import LocalList from './List';

const DnsInfo: React.SFC<IDnsRecord> = props => (
  <List>
    <ListItem divider>
      <ListItemText>
        A Record: <LocalList items={props.aRecords} />
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        CNAME Record: <LocalList items={props.cnameRecords} />
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        MX Records: <LocalList items={props.mxRecords} />
      </ListItemText>
    </ListItem>
  </List>
);

export default DnsInfo;
