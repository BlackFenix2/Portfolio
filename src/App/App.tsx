import { Provider } from 'mobx-react';
import * as React from 'react';
import { css, Global } from '@emotion/core';
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

const App = ({ children }) => (
  // TODO wrap in React.Strict to detect depreciating practices
  <Provider>
    <AppLayout>{children}</AppLayout>
  </Provider>
);

const AppLayout = ({ children }) => (
  <React.Fragment>
    <Global styles={globalAppStyle} />
    <Header />
    <Body>{children}</Body>
    <Footer />
  </React.Fragment>
);

export default App;
