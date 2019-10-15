import * as React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { CssBaseline } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import store from 'src/state';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

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
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
`;

const Side = styled.aside`
  flex-shrink: 0;
`;

const App: React.FC = ({ children }) => (
  // TODO wrap in React.Strict to detect depreciating practices
  <StoreProvider store={store}>
    <AppLayout>{children}</AppLayout>
  </StoreProvider>
);

const AppLayout = ({ children }) => (
  <>
    <CssBaseline />
    <Global styles={globalAppStyle} />
    <section
      css={css`
        display: flex;
      `}
    >
      <Side>
        <SideBar />
      </Side>
      <Container>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Container>
    </section>
  </>
);

export default App;
