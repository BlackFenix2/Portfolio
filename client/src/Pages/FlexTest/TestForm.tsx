import { TextField } from '@material-ui/core';
import { Form } from 'informed';
import { observer } from 'mobx-react';
import * as React from 'react';
import { TextInput } from 'src/components/inputs';

export default class TestForm extends React.Component<any> {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <TextInput displayName="Name" name="name" />
        <TextInput displayName="Notes" name="notes" />
        <TextInput displayName="Title" name="title" />

        <div>
          <button>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    );
  }
}
