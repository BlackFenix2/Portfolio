import React, { useState, useEffect, useCallback } from 'react';

import moment from 'moment';
import { Box, Typography } from '@mui/material';
import CountdownUnit from './CountdownUnit';

interface Timer {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown = (props: {
  date: moment.MomentInput;
  label: React.ReactNode;
}) => {
  const setCountdownState = useCallback(() => {
    const then = moment(props.date);
    const now = moment();
    const countdown = moment.duration(then.diff(now));
    return {
      months: countdown.months(),
      days: countdown.days(),
      hours: countdown.hours(),
      minutes: countdown.minutes(),
      seconds: countdown.seconds(),
    };
  }, [props.date]);

  // memo the target date
  const [timer, setTimer] = useState<Timer>(setCountdownState());

  /**
   * interval setter
   */
  const tick = useCallback(() => {
    setTimer(setCountdownState());
  }, [setCountdownState]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [tick]);

  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        {props.label}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flex: 1,
        }}
      >
        <CountdownUnit
          label="Months"
          time={timer.months}
          maxValue={12}
          isInverted
        />
        <CountdownUnit
          label="Days"
          time={timer.days}
          maxValue={31}
          isInverted
        />
        <CountdownUnit
          label="Hours"
          time={timer.hours}
          maxValue={24}
          isInverted
        />
        <CountdownUnit label="Minutes" time={timer.minutes} maxValue={60} />
        <CountdownUnit
          label="Seconds"
          time={timer.seconds}
          maxValue={60}
          isInverted
        />
      </Box>
    </Box>
  );
};

export default CountDown;
