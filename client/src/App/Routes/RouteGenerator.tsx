import * as React from 'react';
import { Route } from 'react-router-dom';
import { setPageRouteAsync } from './routeHelpers';

// generate simple nav links
const RouteGenerator = props => {
  const { routes } = props;
  const navRoutes = routes.map(
    (item, key) =>
      item.children.length === 0 ? (
        <Route
          exact
          key={key}
          path={item.url}
          component={setPageRouteAsync(item.url)}
        />
      ) : (
        item.children.map((child, index) => (
          <Route
            exact
            key={index}
            path={item.url + child.url}
            component={setPageRouteAsync(item.url + child.url)}
          />
        ))
      )
  );
  return navRoutes;
};

export default RouteGenerator;
