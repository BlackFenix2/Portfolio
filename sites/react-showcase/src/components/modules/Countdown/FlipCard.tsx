import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export const FirstCard = styled.div<{ flip: boolean; reset: boolean }>`
  font-size: 50px;
  line-height: normal;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: ${(props) =>
    props.flip ? 'translate3d(0, 150%, 0)' : 'translate3d(0, 0, 0)'};
  transition: ${(props) =>
    !props.reset ? 'transform 0.5s' : 'transform 0.0s'};
`;

export const SecondCard = styled.div<{ flip: boolean; reset: boolean }>`
  font-size: 50px;
  line-height: normal;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translate3d(0, -150%, 0);
  transform: ${(props) =>
    props.flip ? 'translate3d(0, 0, 0)' : 'translate3d(0, -150%, 0)'};
  transition: ${(props) =>
    !props.reset ? 'transform 0.5s' : 'transform 0.0s'};
`;

interface Props {
  time: number;
}
export const FlipCard: React.FC<Props> = (props) => {
  const [flip, setFlip] = useState(false);
  const [mount, setMount] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState({
    currentTime: props.time,
    previousTime: props.time,
  });
  const transitionEnded = () => {
    setReset(true);
    setFlip(false);
    setTime((prevState) => ({
      currentTime: prevState.currentTime,
      previousTime: props.time,
    }));
  };

  useEffect(() => {
    setReset(false);
    if (mount) {
      setFlip(true);
    }
    setTime((prevState) => ({
      currentTime: props.time,
      previousTime: prevState.currentTime || props.time,
    }));
    setMount(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.time]);
  return (
    <>
      <FirstCard flip={flip} reset={reset} onTransitionEnd={transitionEnded}>
        {time.previousTime.toString().padStart(2, '0')}
      </FirstCard>

      <SecondCard flip={flip} reset={reset}>
        {time.currentTime.toString().padStart(2, '0')}
      </SecondCard>
    </>
  );
};
export default FlipCard;
