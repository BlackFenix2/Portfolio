import React, { FunctionComponent } from 'react';
import { css } from '@emotion/react';

interface Props {
  href: string;
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
 * @param {*} href
 */
const TabLink: FunctionComponent<Props> = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer" css={style}>
    {props.children}
  </a>
);

export default TabLink;
