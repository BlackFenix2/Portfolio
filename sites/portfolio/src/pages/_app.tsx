/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';

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

import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { Toolbar } from '@material-ui/core';

const defaultScheme = getDefaultScheme();
const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const SidebarContent = getSidebarContent(styled);

const App = ({ Component, pageProps }: AppProps) => (
  <Root scheme={defaultScheme}>
    {({ state: { sidebar } }) => (
      <>
        <CssBaseline />
        <Header>
          <Toolbar>
            <SidebarTrigger sidebarId="primarySidebar" />
            <HeaderMockUp />
          </Toolbar>
        </Header>
        <DrawerSidebar sidebarId="primarySidebar">
          <SidebarContent>
            <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
            <NavContentMockUp />
          </SidebarContent>
        </DrawerSidebar>
        <Content>
          <ContentMockUp />
          <Component {...pageProps} />
        </Content>
        <Footer>
          <FooterMockUp />
        </Footer>
      </>
    )}
  </Root>
);

export default App;
