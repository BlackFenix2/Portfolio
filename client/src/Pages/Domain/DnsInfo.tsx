import * as React from 'react';
import { List } from 'semantic-ui-react';
import { IDnsRecord } from './domainRecords';
import LocalList from './List';

const DnsInfo: React.SFC<IDnsRecord> = props => {
  return (
    <List celled animated relaxed="very">
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
};

export default DnsInfo;
