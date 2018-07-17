import * as React from 'react';
import { Form, ResetButton, SubmitButton } from '../../components/form';
import { TextInput } from '../../components/inputs';

const TestForm = props => (
  <div>
    <Form
      onSubmit={props.onSubmit}
      form="FruitForm"
      initialValues={props.initial}
    >
      <TextInput name="name" displayName="Name" />
      <TextInput name="notes" displayName="Notes" />
      <TextInput name="calories" displayName="Calories" />
      <div>
        <SubmitButton loading={props.uiLoading} />
        <ResetButton className="w3-button w3-teal" />
      </div>
    </Form>
  </div>
);

export default TestForm;
