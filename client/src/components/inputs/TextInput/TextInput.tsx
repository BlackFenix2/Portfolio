import * as React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const TextInput = props => (
  <div>
    <Field name={props.name} component={TextField} label={props.displayName} />
  </div>
);

export default TextInput;
