import * as React from 'react';

import { Grid } from 'semantic-ui-react';
import Board from './Board';
import Debug from './Debug';
export default class FlappyBird extends React.Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <h2>Flappy Bird Test</h2>
            <p>
              assets shamelessly hotlinked from this guy ->
              <a href="http://jimmyoliva.herokuapp.com/" target="blank">
                http://jimmyoliva.herokuapp.com/
              </a>
            </p>
            <Board height={400} width={600} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Debug />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
