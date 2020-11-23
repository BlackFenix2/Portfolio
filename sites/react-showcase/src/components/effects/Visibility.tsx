import * as React from 'react';

interface Props {
  active: boolean;
}

const Visibility: React.FC<Props> = (props) =>
  props.active && <div>{props.children}</div>;

export default Visibility;
