import * as React from 'react';
import { List } from 'semantic-ui-react';

interface IProps {
  items: string[];
}
const LocalList: React.SFC<IProps> = props => (
  <List relaxed="very">
    {props.items.map((x, i) => (
      <List.Item key={i}>{x}</List.Item>
    ))}
  </List>
);

export default LocalList;