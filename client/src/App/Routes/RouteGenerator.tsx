import * as React from 'react';
import { Route } from 'react-router-dom';
import { setPageRouteSuspenseAsync } from './routeHelpers';

// generate simple nav links
const RouteGenerator = props => {
  const { routes } = props;
  const navRoutes = routes.map((item, key) =>
    item.children.length === 0 ? (
      <Route exact key={key} path={item.url}>
        {setPageRouteSuspenseAsync(item.url)}
      </Route>
    ) : (
      item.children.map((child, index) => (
        <Route exact key={index} path={item.url + child.url}>
          {setPageRouteSuspenseAsync(item.url + child.url)}
        </Route>
      ))
    )
  );
  return navRoutes;
};

export default RouteGenerator;
