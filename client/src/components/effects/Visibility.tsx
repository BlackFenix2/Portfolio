import * as React from 'react';

interface Props {
  active: boolean;
}

const Visibility: React.SFC<Props> = props => {
  return props.active && <div>{props.children}</div>;
};

export default Visibility;
