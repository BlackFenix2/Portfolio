import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from 'src/state/store/configureStore';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const history = createBrowserHistory();

const App: React.SFC = () => (
  <Provider store={configureStore}>
    <ConnectedRouter history={history} basename="/">
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
