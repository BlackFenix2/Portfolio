import * as React from 'react';
import {
  Card,
  CardContent,
  Select,
  Button,
  MenuItem,
  Slider,
  Chip,
  Switch,
  FormControlLabel,
  Box,
} from '@mui/material';
import { VolumeOff, VolumeMute } from '@mui/icons-material';
import { css } from '@emotion/css';

const Options = (props) => (
  <Card>
    <CardContent>
      <h2
        className={css`
          text-align: center;
        `}
      >
        Options
      </h2>
      <p>Players?</p>
      <Select
        value={props.playerCount}
        onChange={props.changePlayer}
        disabled={props.disabled}
        placeholder="Choose number of Players"
      >
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={0}>zero</MenuItem>
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={props.resetGame}
        disabled={props.disabled}
      >
        Reset
      </Button>
      <Box display="flex" justifyContent="space-between">
        {/* //TODO fix slider performance bug */}
        <Slider
          value={props.delay}
          onChange={props.setDelay}
          min={100}
          max={1000}
          step={100}
          marks
        />
        <Chip label={props.delay} />
      </Box>
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
      <CardContent>
        <Switch onChange={props.toggleSound} />
        {props.muted ? <VolumeMute /> : <VolumeOff />}
      </CardContent>
      <CardContent>
        <FormControlLabel
          control={<Switch onChange={props.toggleMachineLearning} />}
          label="Toggle Machine Learning"
        />
      </CardContent>
    </CardContent>
  </Card>
);

export default Options;
