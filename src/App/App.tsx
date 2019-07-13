import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import { Router } from 'react-router';
import { css, Global } from '@emotion/core';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

// set up Mobx Routing Store
const browserHistory = createBrowserHistory();
const RoutingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, RoutingStore);

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

const App = () => (
  // TODO wrap in React.Strict to detect depreciating practices
  <Provider routing={RoutingStore}>
    <Router history={history}>
      <AppLayout />
    </Router>
  </Provider>
);

const AppLayout = () => (
  <React.Fragment>
    <Global styles={globalAppStyle} />
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);

export default App;
