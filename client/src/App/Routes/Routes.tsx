import { inject } from 'mmlpx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AsyncComponent from 'src/components/shared/AsyncComponent';
import RouteStore from 'src/state/stores/routeStore';
import CustomRoutes from './CustomRoutes';
import RouteGenerator from './RouteGenerator';
import setPageRouteSuspenseAsync from './routeHelpers';

const Home = setPageRouteSuspenseAsync('/Home');

@observer
class Routes extends React.Component {
  @inject() RouteStore: RouteStore;

  render() {
    return (
      // Weird Juryrig, involing stateless components return array of routes directly to switch parent.
      <Switch>
        <Route exact path="/">
          {Home}
        </Route>
        {RouteGenerator(this.RouteStore)}
        {CustomRoutes()}
        <Route>
          <AsyncComponent
            importStatement={import('src/components/shared/NotFound')}
          />
        </Route>
      </Switch>
    );
  }
}

// export with router to prevent blocked updates
export default Routes;
