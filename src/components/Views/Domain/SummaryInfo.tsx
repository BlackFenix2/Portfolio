import * as React from 'react';
import { ListItemText, ListItem, List } from '@material-ui/core';
import { IDomainSummary } from './domainRecords';

const SummaryInfo: React.FC<IDomainSummary> = props => (
  <List>
    <ListItem divider>
      <ListItemText>
        Domain Owner?:
        {props.domainOwner || 'Empty'}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Domain locked?:
        {String(props.domainLocked)}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        E-mail host?:
        {props.emailHost || 'Empty'}
      </ListItemText>
    </ListItem>
  </List>
);

export default SummaryInfo;
