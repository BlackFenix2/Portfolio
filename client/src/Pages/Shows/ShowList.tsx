import * as React from 'react';
import { Card } from 'semantic-ui-react';
import ShowCard from './ShowCard';

const ShowList = (props: any) => (
  <div>
    <h1>List of shows</h1>

    <Card.Group centered>
      {Object.values(props.shows).map((show: any) => (
        <ShowCard {...show} key={show.title} />
      ))}
    </Card.Group>
  </div>
);

export default ShowList;
