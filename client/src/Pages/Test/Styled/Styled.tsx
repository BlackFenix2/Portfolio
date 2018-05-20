import * as React from 'react';

import styled from 'styled-components';

import LoadingIcon from 'src/components/elements/LoadingIcon';

import * as item from './Styled.css';

// tslint:disable-next-line:no-console
console.log(item);
const Button = props => (
  <StyledButton onClick={props.onClick} className={props.className}>
    {props.children}
  </StyledButton>
);

const ButtonContainer = props => (
  <Button {...props}>
    <span>{props.children}</span>
    <span>
      <LoadingIcon active={props.loading} />
    </span>
  </Button>
);

const StyledButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  transition: 0.2s;
  padding: 8px 16px;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: lightgray;
  }
`;

interface StyledProps {
  name?: string;
  loading: boolean;
}

const clickEvent = props => {
  // tslint:disable-next-line:no-console
  console.log('Clicked');
};

const Styled: React.SFC<StyledProps> = props => (
  <div>
    <h2>Styled Tests</h2>
    <button>unstyled Button</button>
    <button className="w3-button w3-blue">Classic CSS</button>
    <ButtonContainer onClick={() => clickEvent(props.loading)}>
      Styled Button Component
    </ButtonContainer>
    <StyledButton onClick={() => clickEvent(props.loading)}>
      Styled Button
    </StyledButton>
  </div>
);

export default Styled;
