import * as React from 'react';

import styled from '@emotion/styled';

import LoadingIcon from 'src/components/elements/LoadingIcon';

const Button = props => (
  <StyledButton onClick={props.onClick} className={props.className}>
    {props.children}
  </StyledButton>
);

const ButtonContainer = props => (
  <Button {...props}>
    {props.children} <LoadingIcon active={props.loading} />
  </Button>
);

const StyledButton = styled('button')`
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
}

interface StyledState {
  loading: boolean;
}

class Styled extends React.Component<StyledProps, StyledState> {
  state = {
    loading: false
  };

  clickEvent = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  render() {
    return (
      <div>
        <h2>Styled Tests</h2>
        <button className="w3-button w3-blue">Classic CSS</button>
        <ButtonContainer onClick={this.clickEvent} loading={this.state.loading}>
          Styled Button Component
        </ButtonContainer>
        <StyledButton onClick={this.clickEvent}>Styled Button</StyledButton>
      </div>
    );
  }
}

export default Styled;
