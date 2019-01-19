import * as React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';
import Board from './Board';
import Debug from './Debug';
import Options from './Options';
import ScoreCard from './ScoreCard';
import { playCircle, playCross, playGame, toggleMute } from './Sounds';

export interface Stats {
  winner: string;
  gameNumber: number;
  totalMoves: number;
  boxOrder: [number];
}

class TicTacToe extends React.Component<any, any> {
  state = {
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
    stats: [] as Stats[],
    boxOrder: [],
    diagPatternCheck: 0,
    acrossPatternCheck: 0,
    acrossSpecialCheck: 0,
    randomCheck: 0,
    muted: false,
    machineLearning: false,
    delay: 1000
  };

  boxClicked = async e => {
    // check for player or CPU input

    if (
      this.state.gameEnded ||
      this.state.gameLocked ||
      this.state.numOfPlayers === 0 ||
      e.target.textContent !== ''
    ) {
      return;
    }
    // start player turn, parse box number to int
    const correctInput = this.startTurn(parseInt(e.target.dataset.square, 10));
    // start bot turn
    if (this.state.numOfPlayers <= 1 && !this.state.gameEnded && correctInput) {
      this.setState({ gameLocked: true });
      await this.cpuTurn(this.state.numOfPlayers);
      this.setState({ gameLocked: false });
    }
  };

  toggleMachineLearning = () => {
    this.setState({
      machineLearning: !this.state.machineLearning
    });
  };

  startTurn = async loc => {
    if (this.state.board[loc] === '') {
      if (this.state.turn === 'X') {
        playCross();
      } else {
        playCircle();
      }
      const currentGameBoard = this.state.board;
      currentGameBoard.splice(loc, 1, this.state.turn);

      this.setState(
        (prevState: any) => ({
          turn: prevState.turn === 'O' ? 'X' : 'O',
          board: currentGameBoard,
          totalMoves: prevState.totalMoves + 1,
          selectedBox: loc,
          boxOrder: [...this.state.boxOrder, loc]
        }),
        () => {
          const result = this.checkWinner();
          // only stop the game when there is a winner or a draw
          if (result) {
            this.setState({
              gameEnded: true,
              winner: result,
              stats: [
                ...this.state.stats,
                {
                  winner: result,
                  totalMoves: this.state.totalMoves,
                  boxOrder: this.state.boxOrder,
                  scoreClicked: this.scoreClicked
                }
              ]
            });
          }
        }
      );
      return true;
    }
    // catch Error attempting to fill in non-empty slot
    throw new Error(
      `Turn Error: Player ${
        this.state.turn
      } attempted to fill a non-empty slot: ${loc}`
    );
  };

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  playSelfOnce = async () => {
    this.reset();
    this.setState({
      gameLocked: true
    });

    do {
      await this.sleep(this.state.delay);
      await this.cpuTurn(this.state.numOfPlayers);
    } while (!this.state.gameEnded);

    this.setState({
      gameLocked: false
    });
  };

  playSelf = async () => {
    if (
      !confirm(
        `Warning: The computer will play itself for ${
          this.state.warGamesCount
        } games`
      )
    ) {
      return;
    }
    this.reset();

    this.setState({
      gameLocked: true
    });

    for (let i = 0; i < this.state.warGamesCount; i++) {
      do {
        await this.sleep(this.state.warGamesDelay);
        await this.cpuTurn(this.state.numOfPlayers);
      } while (!this.state.gameEnded);

      this.setState(
        {
          warGamesDelay:
            this.state.warGamesDelay - 100 >= 100
              ? this.state.warGamesDelay - 100
              : 50
        },
        () => this.reset(this.state.warGamesDelay)
      );
    }

    this.setState(
      {
        gameLocked: false
      },
      this.reset
    );
  };

  /**
   * Pick random number on board not in use
   * @returns {number}
   */
  pickRandom = () => {
    let random;
    do {
      random = Math.floor(Math.random() * 9);
    } while (this.state.board[random] !== '');
    return random;
  };

  aiTurn = async players => {
    if (players > 0) {
      await this.sleep(1000);
    }

    if (!this.state.gameEnded) {
      const { stats } = this.state;

      // TODO: Finish Machine learning, read whole boxorder rather than just winning indexes.

      // find winning scorecards based on current player
      const winningMoves = stats.filter(
        x => x.winner === this.state.turn || x.winner === 'draw'
      );

      // const losingMoves = stats.filter(
      //   x => x.winner !== this.state.turn && x.winner !== 'draw'
      // );

      // begin reading stats for optimal moves
      if (stats.length > 0) {
        try {
          // get the minimum amount of moves to win for current player
          const optimalWinningMoves = winningMoves.reduce(
            (min, p) => (p.totalMoves < min ? p.totalMoves : min),
            winningMoves[0].totalMoves
          );

          // get the optimal winning index
          const winningIndex = winningMoves.find(
            x => x.totalMoves <= optimalWinningMoves
          ).totalMoves;
          const numberPicked =
            winningMoves[winningIndex].boxOrder[this.state.totalMoves];

          await this.startTurn(numberPicked);
        } catch (error) {
          // pick random number if selected space is occupied
          const random = this.pickRandom();
          this.startTurn(random);
        }
      }
      // pick random if stats are empty
      else {
        const random = this.pickRandom();
        this.startTurn(random);
      }
    }
  };

  // check for machine Learning toggle, otherwise use the static AI
  cpuTurn = async players => {
    if (this.state.machineLearning) {
      await this.aiTurn(players);
    } else {
      await this.oldCpuTurn(players);
    }
  };

  oldCpuTurn = async players => {
    if (players > 0) {
      await this.sleep(1000);
    }
    const boardCheck = this.checkBoard();
    if (!this.state.gameEnded) {
      let random;

      if (this.state.totalMoves === 0) {
        // first turn is random for CPU
        this.startTurn(Math.floor(Math.random() * 9));
      } else if (this.state.totalMoves === 1) {
        // pick square depending on opponents first pick
        const diag = [0, 2, 6, 8];
        const acrossCheck =
          (this.state.board[1] === this.state.board[3]) ===
          (this.state.board[5] === this.state.board[7]);
        const diagCheck =
          (this.state.board[0] === this.state.board[2]) ===
          (this.state.board[6] === this.state.board[8]);
        if (!diagCheck) {
          this.startTurn(4);
        } else if (!acrossCheck) {
          if (this.state.board[5] !== this.state.board[3]) {
            const innerPattern = [5, 3];
            do {
              random =
                innerPattern[Math.floor(Math.random() * innerPattern.length)];
            } while (this.state.board[random] !== '');
          } else {
            const innerPattern = [1, 7];
            do {
              random =
                innerPattern[Math.floor(Math.random() * innerPattern.length)];
            } while (this.state.board[random] !== '');
          }
          this.startTurn(random);
        } else {
          this.startTurn(diag[Math.floor(Math.random() * diag.length)]);
        }
      } else if (boardCheck !== '') {
        // pick winning box or block opponent win
        this.startTurn(boardCheck);

        // consider removing below code
      } else if (this.state.totalMoves === 3) {
        // check for special moves on fourth turn
        const pattern =
          this.state.board[4] === 'O' ? [1, 3, 5, 7] : [0, 2, 6, 8];

        if (
          this.state.board[1] === this.state.board[3] &&
          (this.state.board[1] && this.state.board[3])
        ) {
          // pattern 1: diagonal symbols
          this.startTurn(0);
        } else if (
          this.state.board[1] === this.state.board[5] &&
          (this.state.board[1] && this.state.board[5])
        ) {
          this.startTurn(2);
        } else if (
          this.state.board[7] === this.state.board[3] &&
          (this.state.board[7] && this.state.board[3])
        ) {
          this.startTurn(6);
        } else if (
          this.state.board[7] === this.state.board[5] &&
          (this.state.board[7] && this.state.board[5])
        ) {
          this.startTurn(8);
        } else {
          // find unequal pattern
          if (
            this.state.board[1] !== this.state.board[7] ||
            this.state.board[3] !== this.state.board[5]
          ) {
            // check for hook patterns
            if (
              this.state.board[1] === this.state.board[6] &&
              this.state.board[2] === this.state.board[3] &&
              ((this.state.board[1] && this.state.board[6]) ||
                (this.state.board[2] && this.state.board[3]))
            ) {
              this.startTurn(0);
              return;
            }
            if (
              this.state.board[0] === this.state.board[5] &&
              this.state.board[1] === this.state.board[8] &&
              ((this.state.board[0] && this.state.board[5]) ||
                (this.state.board[1] && this.state.board[8]))
            ) {
              this.startTurn(2);
              return;
            }
            if (
              this.state.board[0] === this.state.board[7] &&
              this.state.board[3] === this.state.board[8] &&
              ((this.state.board[0] && this.state.board[7]) ||
                (this.state.board[3] && this.state.board[8]))
            ) {
              this.startTurn(6);
              return;
            }
            if (
              this.state.board[2] === this.state.board[7] &&
              this.state.board[5] === this.state.board[6] &&
              ((this.state.board[2] && this.state.board[7]) ||
                (this.state.board[5] && this.state.board[6]))
            ) {
              this.startTurn(8);
              return;
            }
            // pattern 2 check for X O X or O X O in straight/diagonal or hook
            const innerPattern = [0, 2, 6, 8];
            do {
              random =
                innerPattern[Math.floor(Math.random() * innerPattern.length)];
            } while (this.state.board[random] !== '');
            this.startTurn(random);
            this.setState((prevState: any) => ({
              acrossSpecialCheck: prevState.acrossSpecialCheck + 1
            }));
            return;
          }
          do {
            random = pattern[Math.floor(Math.random() * pattern.length)];
          } while (this.state.board[random] !== '');
          this.setState((prevState: any) => ({
            acrossPatternCheck: prevState.acrossPatternCheck + 1
          }));
          this.startTurn(random);
        }
      } else if (
        !(
          this.state.board[0] &&
          this.state.board[2] &&
          this.state.board[6] &&
          this.state.board[8]
        )
      ) {
        // pick diagonal box

        const pattern = [0, 2, 6, 8];
        do {
          random =
            this.state.totalMoves === 5 && this.state.board[4] === ''
              ? 4
              : pattern[Math.floor(Math.random() * pattern.length)];
        } while (this.state.board[random] !== '');
        this.startTurn(random);
        this.setState((prevState: any) => ({
          diagPatternCheck: prevState.diagPatternCheck + 1
        }));
      } else {
        // pick random box

        do {
          random = Math.floor(Math.random() * 9);
        } while (this.state.board[random] !== '');
        this.startTurn(random);
        this.setState((prevState: any) => ({
          randomCheck: prevState.randomCheck + 1
        }));
      }
    }
  };

  playerChanged = (e, { value }) => {
    this.reset();

    this.setState({
      numOfPlayers: e.target.value === undefined ? value : e.target.value
    });
  };

  clearScore = () => {
    this.setState({
      stats: []
    });
  };

  checkBoard = () => {
    const moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    const { board } = this.state;
    let xWin;
    let oWin;
    for (const i of moves) {
      const subBoard = i;
      const first = board[subBoard[0]];
      const second = board[subBoard[1]];
      const third = board[subBoard[2]];
      if (
        (first === second || first === third || second === third) &&
        ((first && second && !third) ||
          (first && third && !second) ||
          (second && third && !first))
      ) {
        if ((first || second || third) === 'X') {
          xWin = subBoard;
        }
        if ((first || second || third) === 'O') {
          oWin = subBoard;
        }
      }
    }

    if (xWin || oWin) {
      // check for winner first
      if (xWin && this.state.turn === 'X') {
        if (board[xWin[0]] === '') {
          return xWin[0];
        }
        if (board[xWin[1]] === '') {
          return xWin[1];
        }
        if (board[xWin[2]] === '') {
          return xWin[2];
        }
      } else if (oWin && this.state.turn === 'O') {
        if (board[oWin[0]] === '') {
          return oWin[0];
        }
        if (board[oWin[1]] === '') {
          return oWin[1];
        }
        if (board[oWin[2]] === '') {
          return oWin[2];
        }
      }

      // then check for opponent win
      if (xWin && this.state.turn === 'O') {
        if (board[xWin[0]] === '') {
          return xWin[0];
        }
        if (board[xWin[1]] === '') {
          return xWin[1];
        }
        if (board[xWin[2]] === '') {
          return xWin[2];
        }
      } else if (oWin && this.state.turn === 'X') {
        if (board[oWin[0]] === '') {
          return oWin[0];
        }
        if (board[oWin[1]] === '') {
          return oWin[1];
        }
        if (board[oWin[2]] === '') {
          return oWin[2];
        }
      }
    } else {
      return '';
    }

    return '';
  };

  checkWinner = () => {
    const moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    const { board, totalMoves } = this.state;
    for (const i of moves) {
      const subBoard = i;
      const first = board[subBoard[0]];
      const second = board[subBoard[1]];
      const third = board[subBoard[2]];
      if (first === second && first === third && (first && second && third)) {
        return first;
      }
    }
    if (totalMoves === 9) {
      return 'draw';
    }
    return null;
  };

  reset = (delay?: number) => {
    this.setState({
      turn: 'X',
      board: Array(9).fill(''),
      totalMoves: 0,
      gameEnded: false,
      winner: undefined,
      warGamesDelay: delay || 1000,
      selectedBox: undefined,
      boxOrder: [],
      specialCheckUsed: false
    });
    playGame();
  };

  toggleSound = () => {
    toggleMute();
    this.setState((prevState: any) => ({
      muted: !prevState.muted
    }));
  };

  scoreClicked = boardOrder => {
    // display winning pattern
    const displayBoard = Array(9).fill('');
    for (const i in boardOrder) {
      if (parseInt(i, 10) % 2 === 0) {
        displayBoard.splice(boardOrder[i], 1, 'X');
      } else {
        displayBoard.splice(boardOrder[i], 1, 'O');
      }
    }

    this.setState({
      board: displayBoard,
      boxOrder: boardOrder
    });
  };
  setDelay = (e, { value }) => {
    this.setState({
      delay: value
    });
  };

  render() {
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
              toggleMachineLearning={this.toggleMachineLearning}
              machineLearning={this.state.machineLearning}
              setDelay={this.setDelay}
              delay={this.state.delay}
            />
            <Divider hidden />
            <ScoreCard stats={this.state.stats} clearScore={this.clearScore} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Card>
              <Segment basic textAlign="center">
                <h2>Tic-Tac-Toe</h2>
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

export default TicTacToe;
