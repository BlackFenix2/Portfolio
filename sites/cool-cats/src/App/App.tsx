import React from 'react';
import { Layout, Affix } from 'antd';
import { css } from '@emotion/css';
import { Header } from './Header';
import Body from './Body';
import { Footer } from './Footer';
import Banner from './Banner';

const AppLayout = ({ children }) => (
  <Layout
    className={css`
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
      className={css`
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

const App = ({ children }) => <AppLayout>{children}</AppLayout>;

export default App;
