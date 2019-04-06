import * as React from 'react';
import { Route } from 'react-router-dom';

import data from 'src/Pages/Shows/datas.json';
import Details from 'src/pages/Shows/Details';

const CustomRoutes = () => (
  <Route
    exact
    path="Shows/details/:id"
    component={props => {
      const selectedShow = data.shows.find(
        show => props.match.params.id === show.imdbID
      );
      return <Details {...selectedShow} />;
    }}
  />
);

export default CustomRoutes;
