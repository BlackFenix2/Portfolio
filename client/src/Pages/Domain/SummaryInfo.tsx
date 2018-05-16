import * as React from 'react';
import { IDomainSummary } from './domainRecords';

const SummaryInfo: React.SFC<IDomainSummary> = props => {
  return (
    <div>
      <ul className="w3-ul">
        <li>Domain Owner?: {props.domainOwner || 'Empty'}</li>
        <li>Domain locked?: {String(props.domainLocked)}</li>
        <li>E-mail host?: {props.emailHost || 'Empty'}</li>
      </ul>
    </div>
  );
};

export default SummaryInfo;
