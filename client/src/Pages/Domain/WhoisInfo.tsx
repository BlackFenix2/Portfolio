import * as React from 'react';
import { List } from 'semantic-ui-react';
import { IWhoisRecord } from './domainRecords';
import LocalList from './List';

const WhoisInfo: React.SFC<IWhoisRecord> = props => {
  return (
    <List celled relaxed="very" animated>
      <List.Item>
        Created Date: {new Date(props.created).toDateString()}
      </List.Item>
      <List.Item>
        Expiration Date: {new Date(props.expired).toDateString()}
      </List.Item>
      <List.Item>
        Name Servers: <LocalList items={props.nameservers || ['Empty']} />
      </List.Item>
      <List.Item>
        Domain Status: <LocalList items={props.domainStatus || ['Empty']} />
      </List.Item>
      <List.Item>Admin E-mail: {props.admin.email || 'Empty'}</List.Item>
      <List.Item>
        Registrant E-mail: {props.registrant.email || 'Empty'}
      </List.Item>
    </List>
  );
};

export default WhoisInfo;
