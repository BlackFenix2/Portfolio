import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';

const Debug = props => (
  <Card className="w3-card w3-panel">
    <Segment basic textAlign="center">
      <p>Stats:</p>
      <p>Players: {props.numOfPlayers}</p>
      <p>Turn: {props.turn}</p>
      <p>Previous move: {String(props.selectedBox)}</p>
      <p>Diag Check Used: {String(props.diagPatternCheck)}</p>
      <p>Across Check Used: {String(props.acrossPatternCheck)}</p>
      <p>Special Check Used: {String(props.acrossSpecialCheck)}</p>
      <p>Random Check Used: {String(props.randomCheck)}</p>
      <p>Total Moves: {props.totalMoves}</p>
      <p>Board Order: {props.boxOrder}</p>
      <p>Game Ended: {String(props.gameEnded)}</p>
      <p>Winner: {String(props.winner)}</p>
      <p>Locked: {String(props.gameLocked)}</p>
      <p>Delay: {String(props.warGamesDelay)}</p>
    </Segment>
  </Card>
);

export default Debug;
