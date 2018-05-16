import * as React from 'react';
import { IDnsRecord } from './domainRecords';
import List from './List';

const DnsInfo: React.SFC<IDnsRecord> = props => {
  return (
    <ul className="w3-ul">
      <li>
        A Record: <List items={props.aRecords} />
      </li>
      <li>
        CNAME Record: <List items={props.cnameRecords} />
      </li>
      <li>
        MX Records: <List items={props.mxRecords} />
      </li>
    </ul>
  );
};

export default DnsInfo;
