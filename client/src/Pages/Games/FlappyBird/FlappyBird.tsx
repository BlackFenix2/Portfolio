import * as React from 'react';

import { inject } from 'mmlpx';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Grid } from 'semantic-ui-react';
import BirdStore from 'src/state/stores/games/birdStore';
import Board from './Board';
import Debug from './Debug';

@observer
export default class FlappyBird extends React.Component {
  @inject() BirdStore: BirdStore;

  nv: HTMLDivElement;

  @observable debugMode = false;

  componentWillUnmount = () => {
    this.BirdStore.unMountGame(this.nv);
  };

  Reset = () => {
    this.BirdStore.Reset();
  };

  startGame = () => {
    this.BirdStore.startGameLoop(this.nv);
  };

  Debug = () => {
    this.debugMode = !this.debugMode;
  };

  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <h2>
              Flappy Bird Test
              <Button onClick={this.startGame}>Start Game</Button>
              <Button onClick={this.Reset}>Reset</Button>
              <Button onClick={this.Debug}>Debug</Button>
            </h2>
            <p>
              assets shamelessly hotlinked from this guy ->
              <a href="http://jimmyoliva.herokuapp.com/" target="blank">
                http://jimmyoliva.herokuapp.com/
              </a>
            </p>
            <div ref={test => (this.nv = test)}>
              <Board height={400} width={600} debug={this.debugMode} />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            {this.debugMode && <Debug stats={this.BirdStore} />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
