import * as React from 'react';

import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import universal from 'react-universal-component';
import CustomRoutes from './CustomRoutes';
import RouteGenerator from './RouteGenerator';
import { setPageRouteAsync } from './routeHelpers';

const Home = setPageRouteAsync('/Home');

const PageNotFound = universal(() => import('src/components/shared/NotFound'));

class Routes extends React.Component<{ routes: any }> {
  public render() {
    return (
      // Weird Juryrig, involing stateless components return array of routes directly to switch parent.
      <Switch>
        <Route exact path="/" component={Home} />
        {RouteGenerator(this.props)}
        {CustomRoutes()}
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ routes }) => ({ routes });

// export with router to prevent blocked updates
export default withRouter(connect(mapStateToProps)(Routes));
