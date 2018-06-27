import * as React from 'react';
import { Button, Input, Segment } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';
interface IProps {
  item?: string;
  handleSubmit: any;
  change: any;
  domain: string;
  loading: boolean;
}

const InputForm: React.SFC<IProps> = props => {
  return (
    <Card>
      <Segment basic>
        <h2>Domain Input</h2>
        <div>
          <label>Domain Name</label>
        </div>
        <form onSubmit={props.handleSubmit}>
          <Input required value={props.domain} onChange={props.change} />
          <Button className="w3-button w3-teal" loading={props.loading}>
            Submit
          </Button>
        </form>
      </Segment>
    </Card>
  );
};

export default InputForm;
