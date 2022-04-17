import * as React from 'react';
import { Grid, Card } from '@mui/material';

const Debug = (props) => (
  <Card>
    <Grid container direction="column" alignItems="center">
      <p>Stats:</p>
      <p>
        Players:
        {props.numOfPlayers}
      </p>
      <p>
        Turn:
        {props.turn}
      </p>
      <p>
        Previous move:
        {String(props.selectedBox)}
      </p>
      <p>
        Diag Check Used:
        {String(props.diagPatternCheck)}
      </p>
      <p>
        Across Check Used:
        {String(props.acrossPatternCheck)}
      </p>
      <p>
        Special Check Used:
        {String(props.acrossSpecialCheck)}
      </p>
      <p>
        Random Check Used:
        {String(props.randomCheck)}
      </p>
      <p>
        Total Moves:
        {props.totalMoves}
      </p>
      <p>
        Board Order:
        {props.boxOrder}
      </p>
      <p>
        Game Ended:
        {String(props.gameEnded)}
      </p>
      <p>
        Winner:
        {String(props.winner)}
      </p>
      <p>
        Locked:
        {String(props.gameLocked)}
      </p>
      <p>
        Delay:
        {String(props.warGamesDelay)}
      </p>
    </Grid>
  </Card>
);

export default Debug;
