import * as React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Form } from 'informed';
import TextInput from 'src/components/inputs';
import { Search } from '@mui/icons-material';

interface Props {
  // item?: string;
  handleSubmit: () => void;
  change: (e: React.SyntheticEvent) => void;
  domain: string;
  loading?: boolean;
}

const InputForm: React.FC<Props> = (props) => (
  <Card raised>
    <CardHeader title="Domain Input" />
    <CardContent>
      <Form onSubmit={props.handleSubmit}>
        <TextInput
          fullWidth
          label="Domain Name"
          value={props.domain}
          changeEvent={props.change}
          placeholder="Domain..."
          Icon={Search}
        />
      </Form>
    </CardContent>
  </Card>
);

export default InputForm;
