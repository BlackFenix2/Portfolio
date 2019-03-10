import * as React from 'react';

import { inject } from 'mmlpx';
import { Grid } from 'semantic-ui-react';
import BirdStore from 'src/state/stores/games/birdStore';
import Board from './Board';
import Debug from './Debug';
export default class FlappyBird extends React.Component {
  @inject() BirdStore: BirdStore;

  Reset = () => {
    this.BirdStore.Reset();
  };

  startGame = () => {
    this.BirdStore.startGameLoop();
  };

  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <h2>
              Flappy Bird Test
              <button onClick={this.startGame}>Start Game</button>
              <button onClick={this.Reset}>Reset</button>
            </h2>
            <p>
              assets shamelessly hotlinked from this guy ->
              <a href="http://jimmyoliva.herokuapp.com/" target="blank">
                http://jimmyoliva.herokuapp.com/
              </a>
            </p>
            <Board height={400} width={600} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Debug stats={this.BirdStore} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
