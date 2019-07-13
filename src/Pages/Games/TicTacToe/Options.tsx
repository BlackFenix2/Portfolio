import * as React from 'src/pages/Games/TicTacToe/node_modules/react';
import {
  Button,
  Container,
  Icon,
  Input,
  Label,
  Radio,
  Segment,
  Select
} from 'src/pages/Games/TicTacToe/node_modules/semantic-ui-react';
import Card from 'src/components/elements/Card';

const options = [
  { key: '2', text: '2', value: 2 },
  { key: '1', text: '1', value: 1 },
  { key: '0', text: 'Zero', value: 0 }
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
      <div>
        <Button primary onClick={props.resetGame} disabled={props.disabled}>
          Reset
        </Button>
      </div>
      <Input
        value={props.delay}
        onChange={props.setDelay}
        type="range"
        min={100}
        max={1000}
      />
      <Label>{props.delay}</Label>
      {props.playerCount === 0 && (
        <div>
          <Button onClick={props.playSelf} disabled={props.disabled}>
            Play itself
          </Button>
          <Button onClick={props.playSelfOnce} disabled={props.disabled}>
            Play Self once
          </Button>
        </div>
      )}
      <Segment compact basic>
        <Radio toggle onChange={props.toggleSound} />
        <Icon color="black" name={props.muted ? 'volume off' : 'volume up'} />
      </Segment>
      <Segment compact basic>
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
