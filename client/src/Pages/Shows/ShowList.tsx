import * as React from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import ShowCard from './ShowCard';

const ShowList = (props: any) => (
  <div>
    <h1>List of shows</h1>
    <Grid columns={3} stackable padded>
      {Object.values(props.shows).map((show: any) => (
        <Grid.Column key={show.title}>
          <ShowCard {...show} />
          <Divider hidden />
        </Grid.Column>
      ))}
    </Grid>
  </div>
);

export default ShowList;
