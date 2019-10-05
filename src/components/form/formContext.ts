import * as React from 'react';

export interface FormProps {
  pristine: boolean;
  submitting: boolean;
  handleSubmit: () => void;
  reset: () => void;
}

export const FormContext = React.createContext({});

export default FormContext;
