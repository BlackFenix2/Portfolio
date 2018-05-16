import * as React from 'react';
import { Collapse } from 'react-collapse';

import LoadingIcon from '../../components/elements/LoadingIcon';
interface IProps {
  name: string;
  loading: boolean;
}

const DomainCard: React.SFC<IProps> = props => (
  <div className="w3-card-4 w3-section">
    <header className="w3-container w3-teal">
      <h2>
        <span>{props.name}</span>
        <span className="w3-right">
          <LoadingIcon active={props.loading} />
        </span>
      </h2>
    </header>
    <Collapse isOpened={!props.loading}>
      <div>{props.children}</div>
    </Collapse>
  </div>
);

export default DomainCard;
