import * as React from 'react';
import { IWhoisRecord } from './domainRecords';
import List from './List';

const WhoisInfo: React.SFC<IWhoisRecord> = props => {
  return (
    <ul className="w3-ul">
      <li>Created Date: {new Date(props.created).toDateString()}</li>
      <li>Expiration Date: {new Date(props.expired).toDateString()}</li>
      <li>
        Name Servers: <List items={props.nameservers || ['Empty']} />
      </li>
      <li>
        Domain Status: <List items={props.domainStatus || ['Empty']} />
      </li>
      <li>Admin E-mail: {props.admin.email || 'Empty'}</li>
      <li>Registrant E-mail: {props.registrant.email || 'Empty'}</li>
    </ul>
  );
};

export default WhoisInfo;
