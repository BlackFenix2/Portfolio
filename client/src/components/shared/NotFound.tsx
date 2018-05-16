import * as React from 'react';

const NotFound = props => (
  <div>
    <h1>404</h1>
    <p>Path was not found</p>
    <p>Error Code: {props.code}</p>
    <p>Error Message: {props.message}</p>
  </div>
);

export default NotFound;
