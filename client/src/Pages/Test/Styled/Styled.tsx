import * as React from 'react';

import styled from '@emotion/styled';

import { Accordion, Transition } from 'semantic-ui-react';
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
  activeIndex: number;
}

class Styled extends React.Component<StyledProps, StyledState> {
  state = {
    loading: false,
    activeIndex: 0
  };

  clickEvent = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <h2>Styled Tests</h2>
        <button className="w3-button w3-blue">Classic CSS</button>
        <ButtonContainer onClick={this.clickEvent} loading={this.state.loading}>
          Styled Button Component
        </ButtonContainer>
        <StyledButton onClick={this.clickEvent}>Styled Button</StyledButton>

        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            Test
          </Accordion.Title>
          <Transition visible={activeIndex === 0}>
            <Accordion.Content
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              ttttt
            </Accordion.Content>
          </Transition>
        </Accordion>
      </div>
    );
  }
}

export default Styled;
