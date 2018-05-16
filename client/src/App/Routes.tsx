import loadableComponents from 'loadable-components';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Loading from '../components/shared/Loading';
import NotFound from '../components/shared/NotFound';

// temp Juryrig for .json
// tslint:disable-next-line:no-var-requires
const data = require('../Pages/Shows/data.json');

const config = {
  ErrorComponent: ({ error }) => (
    <NotFound code={error.code} message={error.message} />
  ),
  LoadingComponent: () => <Loading />
};

function setPageRouteAsync(Name) {
  return loadableComponents(() => import(`../Pages${Name}`), {
    ...config
  });
}

const Home = setPageRouteAsync('/Home');

const Details = loadableComponents(() => import('../components/Details'), {
  ...config
});

const PageNotFound = loadableComponents(
  () => import('../components/shared/NotFound'),
  {
    ...config
  }
);

// generate simple nav links
const RouteGenerator = props => {
  const { routes } = props;
  const navRoutes = routes.map(
    (item, key) =>
      item.children.length === 0 ? (
        <Route
          key={key}
          path={item.url}
          component={setPageRouteAsync(item.url)}
        />
      ) : (
        item.children.map((child, index) => (
          <Route
            key={index}
            path={item.url + child.url}
            component={setPageRouteAsync(item.url + child.url)}
          />
        ))
      )
  );
  return navRoutes;
};

class Routes extends React.Component {
  public state;
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          path="/details/:id"
          // tslint:disable-next-line:jsx-no-lambda
          component={props => {
            const selectedShow = data.shows.find(
              show => props.match.params.id === show.imdbID
            );
            return <Details {...selectedShow} />;
          }}
        />
        {/* <RouteGenerator routes={this.props.routes} /> */}
        {RouteGenerator(this.props)}
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
const mapStateToProps = ({ routes }) => ({ routes });

// export with router to prevent blocked updates
export default withRouter(connect(mapStateToProps)(Routes));
