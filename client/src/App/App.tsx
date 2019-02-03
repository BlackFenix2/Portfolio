import createBrowserHistory from 'history/createBrowserHistory';
import { Provider as MobxProvider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import { Router } from 'react-router';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

// set up Mobx Routing Store
const browserHistory = createBrowserHistory();
const RoutingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, RoutingStore);

class App extends React.Component {
  render() {
    return (
      <MobxProvider routing={RoutingStore}>
        <Router history={history}>
          <AppLayout />
        </Router>
      </MobxProvider>
    );
  }
}

const AppLayout = () => (
  <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);

export default App;
