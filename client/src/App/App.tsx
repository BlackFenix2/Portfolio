import { createBrowserHistory } from 'history';
import { Provider as MobxProvider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from 'src/state/store/configureStore';
import { todoStore } from 'src/state/stores/todoStore';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        <MobxProvider todoStore={todoStore}>
          <ConnectedRouter history={history} basename="/">
            <AppLayout />
          </ConnectedRouter>
        </MobxProvider>
      </Provider>
    );
  }
}

const AppLayout = () => (
  <React.Fragment>
    <Header />
    <DevTools />
    <Body />
    <Footer />
  </React.Fragment>
);

export default App;
