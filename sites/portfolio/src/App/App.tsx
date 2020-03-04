import * as React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import { CssBaseline } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import store from 'src/state';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

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
    <section
      className={css`
        display: flex;
      `}
    >
      <Side>
        <Sidebar />
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
