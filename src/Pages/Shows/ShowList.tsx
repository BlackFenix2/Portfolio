import * as React from 'react';
import { Card, Transition } from 'semantic-ui-react';
import ShowCard from './ShowCard';

const ShowList = (props: any) => (
  <div>
    <h1>List of shows</h1>

    <Transition.Group as={Card.Group} animation="fly up" duration={500}>
      {Object.values(props.shows).map((show: any) => (
        <ShowCard {...show} key={show.title} />
      ))}
    </Transition.Group>
  </div>
);

export default ShowList;
