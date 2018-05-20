import * as React from 'react';

interface IProps {
  items?: string[];
}
const List: React.SFC<IProps> = props => {
  return <li>{props.children}</li>;
};

export default List;
