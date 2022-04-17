import * as React from 'react';
import {
  Card,
  CardContent,
  Button,
  ListItem,
  List,
  Fade,
  Divider,
} from '@mui/material';
import { ToggleButtonGroup, ToggleButton } from '@mui/lab';

interface Props {
  clearScore: () => void;
  stats: {
    winner: string;
    gameNumber: number;
    totalMoves: number;
    boxOrder: [number];
  }[];
}

const ScoreCard: React.FC<Props> = (props) => {
  const [active, setActive] = React.useState('');

  const filterList = (stats, content) => {
    if (content === 'Draws') {
      return stats.filter((x) => x.winner === 'draw');
    }
    if (content === 'X Wins') {
      return stats.filter((x) => x.winner === 'X');
    }
    if (content === 'O Wins') {
      return stats.filter((x) => x.winner === 'O');
    }
    return stats;
  };

  const activeChange = (e, content) => {
    if (content === active) {
      setActive('');
    } else {
      setActive(content);
    }
  };
  return (
    <Card>
      <CardContent>
        <h2>Score Card</h2>
        <Button color="secondary" onClick={props.clearScore}>
          Clear Score
        </Button>

        <ToggleButtonGroup
          exclusive
          size="large"
          value={active}
          onChange={activeChange}
        >
          <ToggleButton value="Draws">
            {`Draws  ${props.stats.filter((x) => x.winner === 'draw').length}`}
          </ToggleButton>
          <ToggleButton value="X Wins">
            {`X Wins  ${props.stats.filter((x) => x.winner === 'X').length}`}
          </ToggleButton>
          <ToggleButton value="O Wins">
            {`O Wins  ${props.stats.filter((x) => x.winner === 'O').length}`}
          </ToggleButton>
        </ToggleButtonGroup>
      </CardContent>

      <CardContent>
        {Object.entries(filterList(props.stats, active)).map((value, key) => (
          <ScoreCardItem
            key={key}
            {...value[1]}
            gameNumber={Number(value[0]) + 1}
          />
        ))}

        <Button onClick={props.clearScore}>Clear Score</Button>
      </CardContent>
    </Card>
  );
};

const ScoreCardItem = (props) => (
  <Fade in>
    <List>
      <ListItem>
        Game:
        {props.gameNumber}
      </ListItem>
      <ListItem>
        Total Moves:
        {props.totalMoves}
      </ListItem>
      <ListItem>
        Board Order:
        {props.boxOrder}
      </ListItem>
      <ListItem>
        Winner:
        {props.winner}
      </ListItem>
      <Button onClick={() => props.scoreClicked(props.boxOrder)}>board</Button>
      <Divider />
    </List>
  </Fade>
);

export default ScoreCard;
