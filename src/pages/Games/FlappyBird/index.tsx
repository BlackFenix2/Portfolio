import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { Button, Grid } from 'semantic-ui-react';
import birdStore from 'src/state/stores/games/birdStore';
import Board from 'src/components/Views/FlappyBird/Board';
import Debug from 'src/components/Views/FlappyBird/Debug';

const FlappyBird = observer(() => {
  const BirdStore = React.useContext(birdStore);

  let nv: HTMLDivElement;

  const [debugMode, setDebugMode] = React.useState(false);

  React.useEffect(() => {
    // unmount
    return () => {
      BirdStore.unMountGame(nv);
    };
  });

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
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <h2>
            Flappy Bird Test
            <Button onClick={startGame}>Start Game</Button>
            <Button onClick={Reset}>Reset</Button>
            <Button onClick={toggleDebug}>Debug</Button>
          </h2>
          <p>
            assets shamelessly hotlinked from this guy -
            <a href="http://jimmyoliva.herokuapp.com/" target="blank">
              http://jimmyoliva.herokuapp.com/
            </a>
          </p>
          {/* eslint-disable-next-line no-return-assign */}
          <div ref={test => (nv = test)}>
            <Board height={400} width={600} debug={debugMode} />
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          {debugMode && <Debug stats={BirdStore} />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
});

export default FlappyBird;
