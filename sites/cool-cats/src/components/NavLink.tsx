import React, { FunctionComponent } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const style = css`
  border-style: none;
  transition: 0.2s;
  padding: 8px 16px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: lightgrey;
  }
`;

interface Props {
  to: string;
}

const NavLink: FunctionComponent<Props> = (props) => (
  <Link
    to={props.to}
    css={style}
    activeStyle={{ backgroundColor: 'lightgrey' }}
  >
    {props.children}
  </Link>
);

export default NavLink;
