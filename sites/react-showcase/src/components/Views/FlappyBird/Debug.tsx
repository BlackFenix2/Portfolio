import { observer } from 'mobx-react';
import * as React from 'react';
import type BirdStore from 'src/state/stores/games/birdStore';
import { Box } from '@mui/material';

interface Props {
  stats: typeof BirdStore;
}

const Debug = observer((props: Props) => (
  <Box>
    <h2>Debug</h2>
    <code>{JSON.stringify(props.stats, null, 4)}</code>
  </Box>
));

export default Debug;
