import * as React from 'react';
import { ListItemText, ListItem, List } from '@material-ui/core';
import { IDomainSummary } from './domainRecords';

interface Props {
  domainSummary: IDomainSummary;
}

const SummaryInfo: React.FC<Props> = ({ domainSummary }) => (
  <List>
    <ListItem divider>
      <ListItemText>
        Domain Owner?:
        {domainSummary.domainOwner || 'Empty'}
      </ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText>
        Domain locked?:
        {String(domainSummary.domainLocked)}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        E-mail host?:
        {domainSummary.emailHost || 'Empty'}
      </ListItemText>
    </ListItem>
  </List>
);

export default SummaryInfo;
