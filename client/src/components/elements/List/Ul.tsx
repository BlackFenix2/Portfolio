import * as React from 'react';

interface IProps {
  items?: string[];
}
const List: React.SFC<IProps> = props => {
  return <ul className="w3-ul">{props.children}</ul>;
};

export default List;
