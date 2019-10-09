import * as React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

/**
 * @description Global CSS object, use with caution since these styles are not locally scoped
 */
const globalAppStyle = css`
  html,
  body {
    font-size: 16px;
  }

  .accordion > .content .active {
    transition: 0.7s;
  }
`;

const Container = styled.section`
  display: flex;

  align-items: stretch;

  flex-direction: column;
  min-height: 100vh;
`;

const App = ({ children }) => (
  // TODO wrap in React.Strict to detect depreciating practices

  <AppLayout>{children}</AppLayout>
);

const AppLayout = ({ children }) => (
  <>
    <Global styles={globalAppStyle} />
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  </>
);

export default App;
