import * as React from 'react';
import { Progress } from 'src/components/elements';
import * as Grid from 'src/components/elements/Grid';
import { Form, ResetButton, SubmitButton } from 'src/components/form';
import { TextInput } from 'src/components/inputs';
import API from 'src/services/numbersApi';

class FlexTest extends React.Component {
  public state = {
    value: {},
    progressTest: 0,
    apiResult: ''
  };
  public componentWillMount() {
    this.test();
  }

  public submit = value => {
    this.setState({ value });
  };
  public change = event => {
    this.setState({ progressTest: parseInt(event.target.value, 10) });
  };
  public test = async () => {
    const result = await API.getPosts();
    this.setState({ apiResult: result });
  };

  public render() {
    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Col half>
            <h6>{this.state.apiResult}</h6>
            <button onClick={this.test}>new number fact</button>
            <Form onSubmit={this.submit} form="TestForm">
              <TextInput name="firstName" displayName="First Name" />
              <TextInput name="lastName" displayName="Last Name" />
              <TextInput name="Title" displayName="Title" />
              <div>
                <SubmitButton />
                <ResetButton />
              </div>
            </Form>
          </Grid.Col>
          <Grid.Col half>{JSON.stringify(this.state.value, null, 4)}</Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col half>
            <input
              onChange={this.change}
              value={this.state.progressTest}
              type="range"
              placeholder="Progress"
              min="0"
              max="100"
            />
            <Progress percent={this.state.progressTest} />
          </Grid.Col>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

export default FlexTest;
