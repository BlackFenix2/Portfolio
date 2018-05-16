import * as React from 'react';
import Button from '../../components/elements/Button';
interface IProps {
  item?: string;
  handleSubmit: any;
  change: any;
  domain: string;
  loading: boolean;
}

const InputForm: React.SFC<IProps> = props => {
  return (
    <div className="w3-card-4 w3-container">
      <h2>Domain Input</h2>
      <div>
        <label>Domain Name</label>
      </div>
      <form onSubmit={props.handleSubmit}>
        <input
          required
          value={props.domain}
          onChange={props.change}
          className="w3-margin-right"
        />
        <Button className="w3-button w3-teal" loading={props.loading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default InputForm;
