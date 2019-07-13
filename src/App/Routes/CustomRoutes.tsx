import * as React from 'react';
import { Route } from 'react-router-dom';

import Details from 'src/Pages/Shows/Details';
import data from 'src/state/stores/datas.json';

const CustomRoutes = () => (
  <Route
    exact
    path="/Shows/details/:id"
    component={props => {
      const selectedShow = data.shows.find(
        show => props.match.params.id === show.imdbID
      );
      return <Details {...selectedShow} />;
    }}
  />
);

export default CustomRoutes;
