import React, { FunctionComponent } from 'react';
import { css } from '@emotion/css';

interface Props {
  href: string;
  children: React.ReactNode;
}

const style = css`
  transition: 200ms;
  text-decoration: none;
  color: inherit;
  & > * {
    transition: transform 200ms;
  }
  & > :hover {
    transform: scale(1.1);
  }
`;

/**
 * Link that will open inside a new tab
 *
 */
const TabLink: FunctionComponent<Props> = (props) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className={style}
  >
    {props.children}
  </a>
);

export default TabLink;
