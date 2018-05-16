import * as React from 'react';

interface IProps {
  items: string[];
}
const List: React.SFC<IProps> = props => {
  return (
    <ul className="w3-ul">{props.items.map((x, i) => <li key={i}>{x}</li>)}</ul>
  );
};

export default List;
