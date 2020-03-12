import { styled } from 'linaria/react';

interface Props {
  big?: boolean;
}

const Button = styled.button<Props>`
  background-color: blue;
  color: white;
  border-style: none;
  transition: 0.2s;
  padding: 8px 16px;
  cursor: pointer;
  font-size: ${props => (props.big ? '20px' : '')};

  &:hover {
    background-color: lightgrey;
    color: black;
  }
`;

export default Button;
