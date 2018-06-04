import * as React from 'react';
import { Route } from 'react-router-dom';

import Details from 'src/components/Details';
import data from 'src/Pages/Shows/data.json';

const CustomRoutes = () => (
  <Route
    exact
    path="/details/:id"
    component={props => {
      const selectedShow = data.shows.find(
        show => props.match.params.id === show.imdbID
      );
      return <Details {...selectedShow} />;
    }}
  />
);

export default CustomRoutes;
