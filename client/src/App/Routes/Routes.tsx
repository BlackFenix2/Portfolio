import loadableComponents from 'loadable-components';
import React from 'react';

import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import CustomRoutes from './CustomRoutes';
import RouteGenerator from './RouteGenerator';
import { setPageRouteAsync } from './routeHelpers';

const Home = setPageRouteAsync('/Home');

const PageNotFound = loadableComponents(() =>
  import('src/components/shared/NotFound')
);

class Routes extends React.Component<{ routes: any }> {
  public render() {
    return (
      // Weird Juryrig, involing stateless components return array of routes directly to switch parent.
      <Switch>
        <AnimatedSwitch
          atEnter={{
            opacity: 1
          }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
        >
          <Route exact path="/" component={Home} />
          {RouteGenerator(this.props)}
          {CustomRoutes()}
          <Route component={PageNotFound} />
        </AnimatedSwitch>
      </Switch>
    );
  }
}

const mapStateToProps = ({ routes }) => ({ routes });

// export with router to prevent blocked updates
export default withRouter(connect(mapStateToProps)(Routes));
