import * as React from 'react';
import { Field } from 'redux-form';

const SelectInput = props => (
  <div>
    <Field name={props.name} component="select" label={props.displayName}>
      {/* <ItemList>{props.children}</ItemList> */}
      {props.children}
    </Field>
  </div>
);

export default SelectInput;
