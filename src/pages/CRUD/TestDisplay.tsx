import * as React from 'src/pages/CRUD/node_modules/react';
import { Segment } from 'src/pages/CRUD/node_modules/semantic-ui-react';
import { ResetButton, SubmitButton } from 'src/components/form';
import { Form } from 'informed';

const TestDisplay = props => (
  <div>
    <Form onSubmit={props.onSubmit} initialValues={props.initial}>
      <div>
        {props.initial &&
          Object.entries(props.initial).map(([key, value]) => (
            <p key={key}>
              {key} :{String(value)}
            </p>
          ))}
      </div>
      <Segment basic>
        <SubmitButton loading={props.uiLoading} forceEnable />
        <ResetButton />
      </Segment>
    </Form>
  </div>
);

export default TestDisplay;
