import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import Error from './Error';
// Routes
import Routes from './Routes';

class Body extends React.Component<any> {
  state;
  props: any;

  render() {
    return (
      <main style={{ paddingTop: '3em' }}>
        <Segment basic>
          <Error>
            {this.props.children}
            <Routes />
          </Error>
        </Segment>
      </main>
    );
  }
}

export default Body;
