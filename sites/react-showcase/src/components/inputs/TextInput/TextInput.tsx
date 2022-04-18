import React from 'react';
import { FormControl, InputAdornment, TextField } from '@mui/material';

import { SvgIconProps } from '@mui/material/SvgIcon';
import { css } from '@emotion/css';

interface Props {
  label: string;
  value: string;
  changeEvent: (e: React.SyntheticEvent) => void;
  // hidden?: boolean;
  loading?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

const TextInput: React.FC<Props> = (props) => {
  const { Icon, loading } = props;

  return (
    <div>
      <FormControl
        variant="outlined"
        className={css`
          background-color: white;
        `}
        fullWidth={props.fullWidth}
      >
        <TextField
          placeholder={props.placeholder}
          id={props.label}
          value={props.value}
          onChange={props.changeEvent}
          label={props.label}
          InputProps={{
            endAdornment: Icon && (
              <InputAdornment position="end" sx={{ padding: 0 }}>
                <Icon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default TextInput;
