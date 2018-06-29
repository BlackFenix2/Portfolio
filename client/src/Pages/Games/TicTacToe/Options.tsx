import * as React from 'react';
import { Container, Divider, Radio, Segment, Select } from 'semantic-ui-react';
import Card from 'src/components/elements/Card';

const options = [
  { key: '2', text: '2', value: '2' },
  { key: '1', text: '1', value: '1' },
  { key: '0', text: 'Zero', value: '0' }
];

const Options = props => (
  <Card>
    <Segment basic>
      <Container textAlign="center">
        <h2>Options</h2>
      </Container>
      <p>Players?</p>
      <Select
        onChange={props.changePlayer}
        disabled={props.disabled}
        placeholder="Choose number of Players"
        options={options}
      />
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
      <Segment compact>
        <Radio toggle label="Toggle Mute" onChange={props.toggleSound} />
      </Segment>
      <Segment compact>
        <Radio
          toggle
          label="Toggle Machine Learning"
          onChange={props.toggleMachineLearning}
        />
      </Segment>
    </Segment>
  </Card>
);

export default Options;
