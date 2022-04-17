import React from 'react';

import { observer } from 'mobx-react-lite';
import birdStore from 'src/state/stores/games/birdStore';
import Board from 'src/components/Views/FlappyBird/Board';
import Debug from 'src/components/Views/FlappyBird/Debug';
import { Grid, Button } from '@mui/material';

const FlappyBird = () => {
  const BirdStore = React.useContext(birdStore);

  let nv: HTMLDivElement;

  const [debugMode, setDebugMode] = React.useState(false);

  React.useEffect(() => {
    // unmount
    console.log('moount');
    return () => {
      BirdStore.unMountGame();
    };
  }, [BirdStore, nv]);

  const Reset = () => {
    BirdStore.Reset();
  };

  const startGame = () => {
    BirdStore.startGameLoop(nv);
  };

  const toggleDebug = () => {
    setDebugMode(!debugMode);
  };

  return (
    <Grid container>
      <Grid item>
        <h2>
          Flappy Bird Test
          <Button variant="contained" color="primary" onClick={startGame}>
            Start Game
          </Button>
          <Button variant="contained" color="primary" onClick={Reset}>
            Reset
          </Button>
          <Button variant="contained" color="primary" onClick={toggleDebug}>
            Debug
          </Button>
        </h2>
        <p>
          assets on loan curtesy from this fella -
          <a
            href="https://jimmyoliva.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jimmyoliva.com
          </a>
        </p>
        {/* eslint-disable-next-line no-return-assign */}
        <div ref={(test) => (nv = test)}>
          <Board height={400} width={600} debug={debugMode} />
        </div>
      </Grid>
      <Grid item>{debugMode && <Debug stats={BirdStore as any} />}</Grid>
    </Grid>
  );
};

export default observer(FlappyBird);
