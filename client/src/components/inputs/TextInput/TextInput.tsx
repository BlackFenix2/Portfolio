import * as React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Input } from 'semantic-ui-react';
const TextInput = props => (
  <div>
    {/* <Input label={props.displayName} /> */}
    <Field name={props.name} component={TextField} label={props.displayName} />
  </div>
);

export default TextInput;
