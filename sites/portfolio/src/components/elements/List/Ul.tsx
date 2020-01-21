import * as React from 'react';

interface Props {
  items?: string[];
}
const List: React.SFC<Props> = props => (
  <ul className="w3-ul">{props.children}</ul>
);

export default List;
