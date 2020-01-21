import * as React from 'react';
import { Container, Loader } from 'semantic-ui-react';

const Loading = () => (
  <Container textAlign="center">
    <h2>Loading now</h2>
    <Loader active inline />
  </Container>
);

export default Loading;
