import React, { FunctionComponent } from 'react';
import { css } from '@emotion/css';
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
  children: React.ReactNode;
}

const NavLink: FunctionComponent<Props> = (props) => (
  <Link
    to={props.to}
    className={style}
    activeStyle={{ backgroundColor: 'lightgrey' }}
  >
    {props.children}
  </Link>
);

export default NavLink;
