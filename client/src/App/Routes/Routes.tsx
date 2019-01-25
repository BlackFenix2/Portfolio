import { observer } from 'mobx-react';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';
import AsyncComponent from 'src/components/shared/AsyncComponent';
import RouteStore from 'src/state/stores/routesStore';
import CustomRoutes from './CustomRoutes';
import RouteGenerator from './RouteGenerator';
import { setPageRouteSuspenseAsync } from './routeHelpers';

const Home = setPageRouteSuspenseAsync('/Home');
const PageNotFound = React.lazy(() => import('src/components/shared/NotFound'));

@withRouter
@observer([RouteStore.name])
class Routes extends React.Component<{ RouteStore?: RouteStore }, any> {
  render() {
    return (
      // Weird Juryrig, involing stateless components return array of routes directly to switch parent.
      <Switch>
        <Route exact path="/">
          {Home}
        </Route>
        {RouteGenerator(this.props.RouteStore)}
        {CustomRoutes()}
        <Route>
          <AsyncComponent LazyComponent={PageNotFound} />
        </Route>
      </Switch>
    );
  }
}

// export with router to prevent blocked updates
export default Routes;
