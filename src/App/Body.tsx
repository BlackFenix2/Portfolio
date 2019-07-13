import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import Error from './Error';

const Body = ({ children }) => (
  <main style={{ paddingTop: '3em' }}>
    <Segment basic>
      <Error>{children}</Error>
    </Segment>
  </main>
);

export default Body;
