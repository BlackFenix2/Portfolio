import * as React from 'react';
import { List } from 'semantic-ui-react';
import { IDomainSummary } from './domainRecords';

const SummaryInfo: React.SFC<IDomainSummary> = props => {
  return (
    <List relaxed="very" animated divided>
      <List.Item>Domain Owner?: {props.domainOwner || 'Empty'}</List.Item>
      <List.Item>Domain locked?: {String(props.domainLocked)}</List.Item>
      <List.Item>E-mail host?: {props.emailHost || 'Empty'}</List.Item>
    </List>
  );
};

export default SummaryInfo;
