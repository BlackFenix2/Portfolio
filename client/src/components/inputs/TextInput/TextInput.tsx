import { Text } from 'informed';
import * as React from 'react';

interface Props {
  displayName: string;
  name: string;
}
const TextInput = (props: Props) => (
  <div>
    <div>
      <label htmlFor={props.displayName}>{props.displayName}</label>
    </div>
    <Text field={props.name} />
  </div>
);

export default TextInput;
