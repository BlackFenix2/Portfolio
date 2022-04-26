import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { Box, CircularProgress, Typography } from '@mui/material';
import { FlipCard } from './FlipCard';

const CountdownUnit = (props: {
  time: number;
  label: string;
  maxValue: number;
  isInverted?: boolean;
}) => {
  // get x percent of y

  const [percent, setPercent] = React.useState(0);

  useEffect(() => {
    const calculatedPercent = (props.time / props.maxValue) * 100;
    setPercent(props.isInverted ? 100 - calculatedPercent : calculatedPercent);
  }, [props.time, props.maxValue, props.isInverted, percent]);
  return (
    <Box
      sx={{
        margin: 1,
        padding: 2,
        position: 'relative',
      }}
    >
      <Typography variant="h5" textAlign="center" marginBottom={1}>
        {props.label}
      </Typography>
      <CircularProgress
        variant="determinate"
        value={percent}
        size={120}
        color={percent === 100 ? 'success' : 'primary'}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 80,
              left: -30,
              bottom: 50,
              right: 0,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                width: '120px',
                overflow: 'hidden',
              }}
            >
              <FlipCard time={props.time} size={50} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(CountdownUnit);
