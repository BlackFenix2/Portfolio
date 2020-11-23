import React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from '@material-ui/core';

import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { css } from '@emotion/core';

interface Props {
  label: string;
  value: string;
  changeEvent: (e: React.SyntheticEvent) => void;
  hidden?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

const TextInput: React.FC<Props> = (props) => {
  const { Icon } = props;
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef<HTMLLabelElement>(null);
  React.useEffect(() => {
    setLabelWidth(labelRef.current?.offsetWidth);
  }, []);
  return (
    <div>
      <FormControl
        variant="outlined"
        css={css`
          background-color: white;
        `}
        fullWidth={props.fullWidth}
        margin="dense"
      >
        <InputLabel ref={labelRef} htmlFor={props.label}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          css={css`
            padding-right: 0;
          `}
          id={props.label}
          value={props.value}
          onChange={props.changeEvent}
          labelWidth={labelWidth}
          endAdornment={
            <InputAdornment position="end">
              {Icon && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  css={css`
                    height: 40px;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                  `}
                >
                  <Icon />
                </Button>
              )}
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default TextInput;
