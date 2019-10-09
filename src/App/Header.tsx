import * as React from 'react';
import { css } from '@emotion/core';
import { Sticky } from 'semantic-ui-react';
import Nav from './Nav';

const Head = () => (
  <header
    css={css`
      position: sticky;
      top: 0;
      z-index: 10000;
    `}
  >
    <Nav />
  </header>
);

export default Head;
