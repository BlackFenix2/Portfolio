import * as React from 'react';
import { List } from 'semantic-ui-react';

interface Props {
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const Debug: React.SFC<Props> = props => (
  <List divided animated relaxed="very">
    <List.Item>
      Loading:
      {String(props.loading)}
    </List.Item>
    <List.Item>
      Error:
      {String(props.error)}
    </List.Item>
    <List.Item>
      Error Message:
      {String(props.errorMessage)}
    </List.Item>
  </List>
);

export default Debug;
