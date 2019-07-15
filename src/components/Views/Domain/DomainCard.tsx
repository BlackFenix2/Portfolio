import * as React from 'react';
import { Collapse } from 'react-collapse';

import { Card, Header } from 'semantic-ui-react';
import LoadingIcon from '../../elements/LoadingIcon';

interface Props {
  name: string;
  loading: boolean;
}

const DomainCard: React.SFC<Props> = props => (
  <Card raised fluid>
    <Card.Content>
      <Card.Header>
        <Header as="h2" floated="left">
          <span>{props.name}</span>
        </Header>
        <Header as="h2" floated="right">
          <LoadingIcon active={props.loading} />
        </Header>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        <Collapse isOpened={!props.loading}>
          <div>{props.children}</div>
        </Collapse>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default DomainCard;