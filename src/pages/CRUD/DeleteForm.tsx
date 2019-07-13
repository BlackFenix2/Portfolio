import * as React from 'src/pages/CRUD/node_modules/react';
import { Segment } from 'src/pages/CRUD/node_modules/semantic-ui-react';
import { ResetButton, SubmitButton } from 'src/components/form';
import { Form } from 'informed';

const DeleteForm = props => (
  <div>
    <Form onSubmit={() => props.onSubmit(props.initial.id)}>
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

export default DeleteForm;
