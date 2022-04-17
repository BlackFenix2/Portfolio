import * as React from 'react';
import { Grid } from '@mui/material';
import { Movie } from 'src/services/API/moviesAPI';
import ShowCard from './ShowCard';

const ShowList = (props: any) => (
  <div>
    <h1>List of trending movies and shows</h1>

    <Grid container spacing={3}>
      {Object.values(props.shows).map((show: Movie) => (
        <Grid item sm={4} md={3} lg={2} key={show.id}>
          <ShowCard movie={show} key={show.id} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ShowList;
