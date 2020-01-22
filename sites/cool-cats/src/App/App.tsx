import React from 'react';

import { Layout, Affix } from 'antd';
import { css } from '@emotion/core';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import Banner from './Banner';

const App = ({ children }) => <AppLayout>{children}</AppLayout>;

const AppLayout = ({ children }) => (
  <Layout
    css={css`
      min-height: 100vh;
    `}
  >
    <Banner />
    <Affix>
      <Layout.Header>
        <Header />
      </Layout.Header>
    </Affix>
    <Layout.Content
      css={css`
        padding: 0 50px;
      `}
    >
      <Body>{children}</Body>
    </Layout.Content>
    <Layout.Footer>
      <Footer />
    </Layout.Footer>
  </Layout>
);

export default App;
