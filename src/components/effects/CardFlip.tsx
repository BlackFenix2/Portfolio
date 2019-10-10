import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

interface Props {
  cardZIndex?: string;
  containerStyle?: {};
  isFlipped?: boolean;
  flipSpeedBackToFront?: number;
  flipSpeedFrontToBack?: number;
  infinite?: boolean;
  flipDirection?: 'horizontal' | 'vertical';
}

const CardFlip: React.FC<Props> = props => {
  const {
    flipDirection,
    infinite,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,

    containerStyle,
    cardZIndex
  } = props;

  const [isFlipped, setFlipped] = useState(props.isFlipped);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(c => !c);
      setRotation(c => c + 180);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isFlipped]);

  const frontRotateY = `rotateY(${
    infinite ? rotation : isFlipped ? 180 : 0
  }deg)`;
  const backRotateY = `rotateY(${
    infinite ? rotation + 180 : isFlipped ? 0 : -180
  }deg)`;
  const frontRotateX = `rotateX(${
    infinite ? rotation : isFlipped ? 180 : 0
  }deg)`;
  const backRotateX = `rotateX(${
    infinite ? rotation + 180 : isFlipped ? 0 : -180
  }deg)`;

  const container = css`
    perspective: 1000px;
    z-index: ${cardZIndex};
  `;

  const flipper = css`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const front = css`
    backface-visibility: hidden;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    z-index: 2;
    position: ${isFlipped ? 'absolute' : 'relative'};
    transform: ${flipDirection === 'horizontal' ? frontRotateY : frontRotateX};
    transition: ${flipSpeedBackToFront}s;
  `;

  const back = css`
    backface-visibility: hidden;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: ${isFlipped ? 'relative' : 'absolute'};
    transform: ${flipDirection === 'horizontal' ? backRotateY : backRotateX};
    transition: ${flipSpeedFrontToBack}s;
  `;

  return (
    <div css={container} style={{ ...containerStyle }}>
      <div css={flipper}>
        <div css={front}>{props.children[0]}</div>

        <div css={back}>{props.children[1]}</div>
      </div>
    </div>
  );
};

CardFlip.defaultProps = {
  containerStyle: {},
  cardZIndex: 'auto',
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false
};

export default CardFlip;
