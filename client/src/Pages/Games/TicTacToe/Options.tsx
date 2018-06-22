import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';

const Options = props => (
  <Card>
    <Segment basic textAlign="center">
      <h2>Options</h2>
      <p>Players?</p>
      <select onChange={props.changePlayer} disabled={props.disabled}>
        <option value="" disabled>
          Choose number of players
        </option>
        <option value="2">2</option>
        <option value="1">1</option>
        <option value="0">Zero</option>
      </select>
      <button onClick={props.resetGame} disabled={props.disabled}>
        Reset
      </button>
      {props.playerCount === '0' && (
        <div>
          <button onClick={props.playSelf} disabled={props.disabled}>
            Play itself
          </button>
          <button onClick={props.playSelfOnce} disabled={props.disabled}>
            Play Self once
          </button>
        </div>
      )}
      <div>
        <button onClick={props.toggleSound}>
          Toggle Mute Test:{String(props.muted)}
        </button>
      </div>
    </Segment>
  </Card>
);

export default Options;
