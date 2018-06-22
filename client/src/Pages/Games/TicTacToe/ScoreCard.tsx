import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { Card } from 'src/components/elements/Card';

const ScoreCard = props => (
  <Card>
    <Segment basic textAlign="center">
      <h2>Score Card</h2>
      <div>
        <ul>
          {Object.entries(props.stats).map((value, key) => (
            <div key={key}>
              <ScoreCardItem {...value[1]} gameNumber={Number(value[0]) + 1} />
            </div>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={props.clearScore}>Clear Score</button>
      </div>
    </Segment>
  </Card>
);

const ScoreCardItem = props => (
  <li>
    Game:{props.gameNumber} Total Moves:{props.totalMoves} Board Order:{' '}
    {props.boxOrder} Winner:
    {props.winner}
    <button onClick={() => props.scoreClicked(props.boxOrder)}>board</button>
  </li>
);

export default ScoreCard;
