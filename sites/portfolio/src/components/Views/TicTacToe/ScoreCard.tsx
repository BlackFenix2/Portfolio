import * as React from 'react';
import {
  Card,
  CardContent,
  Button,
  Chip,
  ListItem,
  List,
  Tabs,
  Tab,
  Fade,
  Divider
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

interface Props {
  clearScore: () => void;
  stats: {
    winner: string;
    gameNumber: number;
    totalMoves: number;
    boxOrder: [number];
  }[];
}

interface State {
  active: string;
}

class ScoreCard extends React.Component<Props, State> {
  // default active state
  state = {
    active: ''
  };

  filterList = (stats, content) => {
    if (content === 'Draws') {
      return stats.filter(x => x.winner === 'draw');
    }
    if (content === 'X Wins') {
      return stats.filter(x => x.winner === 'X');
    }
    if (content === 'O Wins') {
      return stats.filter(x => x.winner === 'O');
    }
    return stats;
  };

  activeChange = (e, content) => {
    if (content === this.state.active) {
      this.setState({
        active: ''
      });
    } else {
      this.setState({
        active: content
      });
    }
  };

  render() {
    return (
      <Card>
        <CardContent>
          <h2>Score Card</h2>
          <Button color="secondary" onClick={this.props.clearScore}>
            Clear Score
          </Button>

          <ToggleButtonGroup
            exclusive
            size="large"
            value={this.state.active}
            onChange={this.activeChange}
          >
            <ToggleButton value="Draws">
              {`Draws  ${
                this.props.stats.filter(x => x.winner === 'draw').length
              }`}
            </ToggleButton>
            <ToggleButton value="X Wins">
              {`X Wins  ${
                this.props.stats.filter(x => x.winner === 'X').length
              }`}
            </ToggleButton>
            <ToggleButton value="O Wins">
              {`O Wins  ${
                this.props.stats.filter(x => x.winner === 'O').length
              }`}
            </ToggleButton>
          </ToggleButtonGroup>
        </CardContent>

        <CardContent>
          {Object.entries(
            this.filterList(this.props.stats, this.state.active)
          ).map((value, key) => (
            <ScoreCardItem
              key={key}
              {...value[1]}
              gameNumber={Number(value[0]) + 1}
            />
          ))}

          <Button onClick={this.props.clearScore}>Clear Score</Button>
        </CardContent>
      </Card>
    );
  }
}

const ScoreCardItem = props => (
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
