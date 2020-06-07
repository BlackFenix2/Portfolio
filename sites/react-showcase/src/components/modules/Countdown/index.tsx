import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { css } from 'linaria';
import moment from 'moment';
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
    <div
      className={css`
        background-color: lightgray;
        border-radius: 5px;
      `}
    >
      <div
        className={css`
          box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.15);
          padding: 20px;
          text-align: center;
          background-color: lightblue;
        `}
      >
        <h1>{props.label}</h1>
      </div>
      <div
        className={css`
          display: flex;
          flex: 1;
          justify-content: center;
          flex-wrap: wrap;
        `}
      >
        <CountdownUnit label="Months" time={timer.months} />
        <CountdownUnit label="Days" time={timer.days} />
        <CountdownUnit label="Hours" time={timer.hours} />
        <CountdownUnit label="Minutes" time={timer.minutes} />

        <CountdownUnit label="Seconds" time={timer.seconds} />
      </div>
    </div>
  );
};

export default CountDown;
