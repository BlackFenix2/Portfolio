import * as React from 'src/pages/Test/Styled/node_modules/react';

import { css } from 'src/pages/Test/Styled/node_modules/@emotion/core';
import styled from 'src/pages/Test/Styled/node_modules/@emotion/styled';

import LoadingIcon from 'src/components/elements/LoadingIcon';

const Button: React.FC<any> = props => (
  <StyledButton onClick={props.onClick} className={props.className}>
    {props.children}
  </StyledButton>
);

const ButtonContainer: React.FC<any> = props => (
  <Button {...props}>
    {props.children} <LoadingIcon active={props.loading} />
  </Button>
);

const StyledButton = styled.button`
  text-align: center;
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

const test = css`
  color: blue;
`;

interface StyledProps {
  name?: string;
}

interface StyledState {
  loading: boolean;
  activeIndex: number;
}

const Styled: React.FC<StyledProps> = () => {
  const [style, setStyle] = React.useState<StyledState>({
    loading: false,
    activeIndex: 0
  });

  const onChangeEvent = () => {
    setStyle({ ...style, loading: !style.loading });
  };
  return (
    <>
      <h2>Styled Tests</h2>
      <h4>bleh</h4>
      <button className="w3-button w3-blue">Classic CSS</button>
      <button css={test}>Styled Core</button>
      <ButtonContainer onClick={onChangeEvent} loading={style.loading}>
        Styled Button Component
      </ButtonContainer>
      <StyledButton onClick={onChangeEvent}>Styled Button</StyledButton>
    </>
  );
};
export default Styled;
