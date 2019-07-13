import * as React from 'react';
import { Card, Form, Input } from 'semantic-ui-react';

interface IProps {
  item?: string;
  handleSubmit: any;
  change: any;
  domain: string;
  loading: boolean;
}

const InputForm: React.SFC<IProps> = props => (
  <Card raised fluid>
    <Card.Content>
      <Card.Header>
        <h2>Domain Input</h2>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Form onSubmit={props.handleSubmit}>
        <Form.Field>
          <span>Domain Name</span>
          <Input
            action={{ color: 'blue', content: 'Search' }}
            required
            placeholder="Domain.com..."
            value={props.domain}
            onChange={props.change}
          />
        </Form.Field>
      </Form>
    </Card.Content>
  </Card>
);

export default InputForm;
