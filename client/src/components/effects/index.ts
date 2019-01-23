import styled from '@emotion/styled';

const Button = styled.div`
  display: inline-block;
  transform: rotate(0deg);
  transition: transform 0.2s ease-out;
  &:hover {
    transform: rotate(45deg);
  }
`;

export default Button;
