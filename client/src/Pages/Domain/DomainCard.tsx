import * as React from 'react';
import { Collapse } from 'react-collapse';

import { Header, Segment } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';
import LoadingIcon from '../../components/elements/LoadingIcon';
interface IProps {
  name: string;
  loading: boolean;
}

const DomainCard: React.SFC<IProps> = props => (
  <Card>
    <div>
      <Segment basic inverted clearing>
        <Header as="h2" floated="left">
          <span>{props.name}</span>
        </Header>
        <Header as="h2" floated="right">
          <LoadingIcon active={props.loading} />
        </Header>
      </Segment>
    </div>
    <div>
      <Collapse isOpened={!props.loading}>
        <div>{props.children}</div>
      </Collapse>
    </div>
  </Card>
);

export default DomainCard;
