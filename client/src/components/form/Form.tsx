import * as React from 'react';
import { Form, InjectedFormProps, reduxForm } from 'redux-form';

import { FormContext, FormProps } from './formContext';

const formConfig = {
  enableReinitialize: true
};

const FormContainer: React.SFC<
  FormProps & InjectedFormProps<{}, FormProps>
> = props => {
  const { handleSubmit, children, reset, pristine, submitting } = props;
  return (
    <FormContext.Provider value={{ pristine, submitting }}>
      <Form onSubmit={handleSubmit} onReset={reset}>
        {children}
      </Form>
    </FormContext.Provider>
  );
};

/**
 * creates an instance of ReduxForm to mirror HTML5 forms
 * @param {string} form required for redux
 */
const ReduxForm = reduxForm(formConfig)(FormContainer);

export default ReduxForm;
