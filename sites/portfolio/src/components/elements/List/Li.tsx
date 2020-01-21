import * as React from 'react';

interface Props {
  items?: string[];
}
const List: React.SFC<Props> = props => <li>{props.children}</li>;

export default List;
