import { css } from '@emotion/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { getImagePath } from 'src/helpers/imageHelper';
// Image equalizer

const imgStyle = css`
  width: 300px;
  height: 400px;
`;

const Details = (props: any) => (
  <div className="w3-panel">
    <Image
      // TODO Remove require statement
      src={getImagePath(import(`src/lib/img/posters/${props.poster}`))}
      alt="where is the item"
      css={imgStyle}
    />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Link to="/Shows" className="w3-button w3-teal">
      Go Back
    </Link>
  </div>
);

export default Details;
