import * as React from 'react';
import { Grid } from '@material-ui/core';
import ShowCard from './ShowCard';

const ShowList = (props: any) => (
  <div>
    <h1>List of shows</h1>

    <Grid container spacing={3}>
      {Object.values(props.shows).map((show: any) => (
        <Grid item xs key={show.title}>
          <ShowCard {...show} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ShowList;
