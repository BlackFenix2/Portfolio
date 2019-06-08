import { Text } from 'informed';
import * as React from 'react';

interface Props {
  displayName?: string;
  name: string;
  hidden?: boolean;
}
const TextInput = (props: Props) => (
  <>
    {!props.hidden && (
      <div>
        <label htmlFor={props.displayName}>{props.displayName}</label>
      </div>
    )}

    <Text field={props.name} hidden={props.hidden} />
  </>
);

export default TextInput;
