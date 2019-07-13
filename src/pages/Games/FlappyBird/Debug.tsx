import { observer } from 'src/pages/Games/FlappyBird/node_modules/mobx-react';
import * as React from 'src/pages/Games/FlappyBird/node_modules/react';
import { Segment } from 'src/pages/Games/FlappyBird/node_modules/semantic-ui-react';
import BirdStore from 'src/state/stores/games/birdStore';

interface Props {
  stats: BirdStore;
}

const Debug = observer((props: Props) => (
  <Segment basic>
    <h2>Debug</h2>
    <code>{JSON.stringify(props.stats, null, 4)}</code>
  </Segment>
));

export default Debug;
