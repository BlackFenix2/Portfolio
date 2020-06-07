import * as React from 'react';
import LoadingIcon from 'src/components/elements/LoadingIcon';

const Button = (props) => (
  <button onClick={props.onClick} className={props.className}>
    {props.children}
  </button>
);

const ButtonContainer = (props) => (
  <Button {...props}>
    <span>{props.children}</span>
    <span className="w3-padding">
      <LoadingIcon active={props.loading} />
    </span>
  </Button>
);

export default ButtonContainer;
