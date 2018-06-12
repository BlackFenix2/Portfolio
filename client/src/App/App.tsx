import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../state/store/configureStore';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

// React CSS Libraries
import './css';

const history = createBrowserHistory();

const App: React.SFC = () => (
  <Provider store={configureStore}>
    <ConnectedRouter history={history} basename="/">
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </ConnectedRouter>
  </Provider>
);

export default App;
