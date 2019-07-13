import * as React from 'src/pages/Domain/node_modules/react';
import { Collapse } from 'src/pages/Domain/node_modules/react-collapse';

import { Card, Header } from 'src/pages/Domain/node_modules/semantic-ui-react';
import LoadingIcon from '../../components/elements/LoadingIcon';

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
