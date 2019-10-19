import React from 'react';
import { Paper, Grid, Button, TextField, Box } from '@material-ui/core';
import css from '@emotion/css';

interface Props {
  label: string;
  value: string;
  changeEvent: (e: React.SyntheticEvent) => void;
  hidden?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
}

/**
 *
 * @param props
 */
const TextInput = (props: Props) => (
  <Grid container>
    <Grid item>
      <TextField
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changeEvent}
        fullWidth={props.fullWidth}
        label={props.label}
        variant="outlined"
        margin="dense"
        css={css`
          background-color: #fff;
          & fieldset {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right-width: 0 !important;
          }
        `}
      />
    </Grid>

    <Grid item>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        css={css`
          margin-top: 8px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
      >
        Search
      </Button>
    </Grid>
  </Grid>
);

export default TextInput;
