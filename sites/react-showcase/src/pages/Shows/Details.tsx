import { Link } from 'gatsby';
import showStore from 'src/state/stores/showStore';
import React from 'react';
import { Router } from '@reach/router';
import { css } from '@emotion/core';
import { observer } from 'mobx-react-lite';
// Image equalizer

const imgStyle = css`
  width: 300px;
  height: 400px;
`;

const DetailsComponent = (props: any) => {
  const ShowStore = React.useContext(showStore);

  const show = ShowStore.shows.find(
    (value) => value.id.toString() === props.id.toString()
  );

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
        alt="where is the item"
        css={imgStyle}
      />
      <h1>{show.name || show.title}</h1>
      <p>{show.overview}</p>
      <Link to="/Shows">Go Back</Link>
    </div>
  );
};

const Details = () => (
  <Router>
    <DetailsComponent path="Shows/Details/:id" />
  </Router>
);

export default observer(Details);
