import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import Error from './Error';
// Routes
import Routes from './Routes';

class Body extends React.Component {
  public state;
  public render() {
    return (
      <main style={{ marginTop: '3em' }}>
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
