import json from '*.json';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import BirdStore from 'src/state/stores/games/birdStore';

interface Props {
  stats: BirdStore;
}

const Debug = observer((props: Props) => (
  <Segment basic textAlign="center">
    <h2>Debug</h2>
    <code>{JSON.stringify(props.stats)}</code>
  </Segment>
));

export default Debug;
