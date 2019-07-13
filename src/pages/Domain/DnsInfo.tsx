import * as React from 'src/pages/Domain/node_modules/react';
import { List } from 'src/pages/Domain/node_modules/semantic-ui-react';
import { IDnsRecord } from './domainRecords';
import LocalList from './List';

const DnsInfo: React.SFC<IDnsRecord> = props => (
  <List divided animated relaxed="very">
    <List.Item>
      A Record: <LocalList items={props.aRecords} />
    </List.Item>
    <List.Item>
      CNAME Record: <LocalList items={props.cnameRecords} />
    </List.Item>
    <List.Item>
      MX Records: <LocalList items={props.mxRecords} />
    </List.Item>
  </List>
);

export default DnsInfo;
