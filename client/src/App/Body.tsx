import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import Error from './Error';
// Routes
import Routes from './Routes';

class Body extends React.Component {
  state;

  render() {
    return (
      <main style={{ paddingTop: '3em' }}>
        <Segment basic>
          <Error>
            <Routes />
          </Error>
        </Segment>
      </main>
    );
  }
}

export default Body;
