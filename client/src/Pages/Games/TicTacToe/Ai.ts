import { playCircle, playCross } from './Sounds';

export const startTurn = async loc => {
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
        if (result === 'X') {
          this.setState({
            gameEnded: true,
            winner: 'X',
            boxOrder: [],
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
        } else if (result === 'O') {
          this.setState({
            gameEnded: true,
            winner: 'O',
            boxOrder: [],
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
        } else if (result === 'draw') {
          this.setState({
            gameEnded: true,
            winner: 'draw',
            boxOrder: [],
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
  return false;
};
