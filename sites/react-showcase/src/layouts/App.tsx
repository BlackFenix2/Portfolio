import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { CssBaseline, Toolbar } from '@material-ui/core';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getContent,
  getFooter,
  getDefaultScheme,
} from '@mui-treasury/layout';
import { StoreProvider } from 'easy-peasy';
import store from 'src/state';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const defaultScheme = getDefaultScheme();
const MuiHeader = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const MuiContent = getContent(styled);
const MuiFooter = getFooter(styled);
const SidebarContent = getSidebarContent(styled);

const App: React.FC = ({ children }) => (
  // TODO wrap in React.Strict to detect depreciating practices
  <StoreProvider store={store}>
    <AppLayout>{children}</AppLayout>
  </StoreProvider>
);

const SIDEBAR_ID = 'primarySidebar';

const AppLayout = ({ children }) => (
  <Root scheme={defaultScheme}>
    <div
      css={css`
        display: flex;
        width: 100%;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <CssBaseline />
      <MuiHeader color="primary" elevation={4}>
        <Toolbar>
          <SidebarTrigger sidebarId={SIDEBAR_ID} color="inherit" />
          <Header />
        </Toolbar>
      </MuiHeader>
      <DrawerSidebar sidebarId={SIDEBAR_ID}>
        <SidebarContent>
          <Sidebar />
        </SidebarContent>
      </DrawerSidebar>
      <MuiContent
        css={css`
          flex-grow: 1;
        `}
      >
        <Body>{children}</Body>
      </MuiContent>
      <MuiFooter>
        <Footer />
      </MuiFooter>
    </div>
  </Root>
);

export default App;
