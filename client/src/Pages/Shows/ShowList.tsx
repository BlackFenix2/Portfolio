import * as React from 'react';

import ShowCard from './ShowCard';

const ShowList = (props: any) => (
  <div>
    <h1>List of shows</h1>
    <div className="w3-row">
      {Object.values(props.shows).map((show: any) => (
        <div className="w3-padding w3-col w3-third" key={show.title}>
          <ShowCard {...show} />
        </div>
      ))}
    </div>
  </div>
);

export default ShowList;
