import * as React from 'react';
import Error from './Error';
// Routes
import Routes from './Routes';

class Body extends React.Component {
  public state;
  public render() {
    return (
      <main className="w3-panel">
        <Error>
          <Routes />
        </Error>
      </main>
    );
  }
}

export default Body;
