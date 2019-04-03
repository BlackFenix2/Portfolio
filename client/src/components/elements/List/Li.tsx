import * as React from 'react';

interface IProps {
  items?: string[];
}
const List: React.SFC<IProps> = props => <li>{props.children}</li>;

export default List;
