import * as React from 'react';

const ScoreCard = props => (
  <div className="w3-card w3-panel">
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
  </div>
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
