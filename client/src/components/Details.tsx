import * as React from 'react';
import { Link } from 'react-router-dom';

// Image equalizer
const imgStyle = {
  width: '300px',
  height: '400px'
};

const Details = props => (
  <div className="w3-panel">
    <img
      src={require(`src/lib/img/posters/${props.poster}`)}
      alt="where is the item"
      style={imgStyle}
    />
    <h1>{props.title}</h1>

    <p>{props.description}</p>
    <Link to="/Shows" className="w3-button w3-teal">
      Go Back
    </Link>
  </div>
);

export default Details;
