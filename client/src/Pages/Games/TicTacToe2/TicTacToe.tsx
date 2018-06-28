import * as React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';
import Board from './Board';
import Debug from './Debug';
import Options from './Options';
import ScoreCard from './ScoreCard';
import { Circle, Times } from './Shapes';

class TicTacToe2 extends React.Component {
  public state = {
    turn: 'X',
    board: Array(9).fill(''),
    totalMoves: 0,
    gameEnded: false,
    gameLocked: false,
    winner: undefined,
    numOfPlayers: 2,
    warGamesCount: 40,
    warGamesDelay: 1000,
    selectedBox: undefined,
    stats: [],
    boxOrder: [],
    diagPatternCheck: 0,
    acrossPatternCheck: 0,
    acrossSpecialCheck: 0,
    randomCheck: 0,
    muted: false
  };

  public boxClicked = e => {
    // check for player or CPU input
    if (
      this.state.gameEnded ||
      this.state.gameLocked ||
      this.state.numOfPlayers === 0 ||
      e.target.textContent !== ''
    ) {
      return;
    }
    // start player turn
    this.startTurn(e.target.dataset.square);
  };

  public startTurn = target => {
    this.setState({
      board: ['x', 'x', '', '', '', '', '', '', '']
    });
  };

  public render() {
    return (
      <Grid padded="horizontally" stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Options
              changePlayer={this.playerChanged}
              resetGame={this.reset}
              disabled={this.state.gameLocked}
              playSelf={this.playSelf}
              playSelfOnce={this.playSelfOnce}
              playerCount={this.state.numOfPlayers}
              toggleSound={this.toggleSound}
              muted={this.state.muted}
            />
            <Divider hidden />
            <ScoreCard stats={this.state.stats} clearScore={this.clearScore} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Card>
              <Segment basic textAlign="center">
                <h2>Tic-Tac-Toe 2.0</h2>
                <Board clicked={this.boxClicked} gameBoard={this.state.board} />
              </Segment>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Debug {...this.state} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TicTacToe2;
