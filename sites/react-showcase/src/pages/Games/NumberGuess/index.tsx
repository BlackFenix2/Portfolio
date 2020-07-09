import React, { useState, useEffect } from 'react';
import { Grid, Button, ButtonGroup } from '@material-ui/core';

import { PageProps } from 'gatsby';

const index = (props: PageProps) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [midpoint, setMidpoint] = useState(50);

  // change midpoint when low and high values change
  useEffect(() => {
    setMidpoint(Math.round((low + high) / 2));
  }, [low, high]);

  const guessLower = () => {
    setHigh(midpoint - 1);
  };

  const guessHigher = () => {
    setLow(midpoint + 1);
  };

  const correctGuess = () => {
    confirm('Congrats, you did it!');
    setLow(0);
    setHigh(100);
  };

  return (
    <Grid container>
      <Grid item>
        <h2>
          Guess the number between {low} and {high}
        </h2>

        <div>
          <p>is your number {midpoint}? </p>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={guessLower}>Lower</Button>
            <Button onClick={guessHigher}>Higher</Button>
            <Button onClick={correctGuess}>Correct</Button>
          </ButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
};

export default index;
