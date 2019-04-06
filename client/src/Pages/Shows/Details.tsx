import { css } from '@emotion/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

// Image equalizer

const imgStyle = css`
  width: 300px;
  height: 400px;
`;

// TODO move component inside shows pages,
class Details extends React.Component<any> {
  render() {
    return (
      <div className="w3-panel">
        <img
          // TODO Remove require statement
          src={require(`src/lib/img/posters/${this.props.poster}`)}
          alt="where is the item"
          css={imgStyle}
        />
        <h1>{this.props.title}</h1>

        <p>{this.props.description}</p>
        <Link to="/Shows" className="w3-button w3-teal">
          Go Back
        </Link>
      </div>
    );
  }
}

export default Details;
