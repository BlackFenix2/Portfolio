import * as React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { IDnsRecord } from './domainRecords';
import LocalList from './List';

interface Props {
  dns: IDnsRecord;
}
const DnsInfo: React.FC<Props> = ({ dns }) => (
  <List>
    <ListItem divider>
      <ListItemText>
        A Record: <LocalList items={dns.aRecords} />
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        CNAME Record: <LocalList items={dns.cnameRecords} />
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        MX Records: <LocalList items={dns.mxRecords} />
      </ListItemText>
    </ListItem>
  </List>
);

export default DnsInfo;
