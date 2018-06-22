import * as React from 'react';
import { Button, Grid, Progress } from 'semantic-ui-react';
import { Form, ResetButton, SubmitButton } from 'src/components/form';
import { TextInput } from 'src/components/inputs';
import API from 'src/services/numbersApi';

class FlexTest extends React.Component {
  public state = {
    value: {},
    progressTest: 0,
    apiResult: ''
  };
  public componentDidMount() {
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
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <p>{this.state.apiResult}</p>
              <Button onClick={this.test}>new number fact</Button>
              <Form onSubmit={this.submit} form="TestForm">
                <TextInput name="firstName" displayName="First Name" />
                <TextInput name="lastName" displayName="Last Name" />
                <TextInput name="Title" displayName="Title" />
                <div>
                  <SubmitButton />
                  <ResetButton />
                </div>
              </Form>
            </Grid.Column>
            <Grid.Column>
              {JSON.stringify(this.state.value, null, 4)}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <input
                onChange={this.change}
                value={this.state.progressTest}
                type="range"
                placeholder="Progress"
                min="0"
                max="100"
              />
              <Progress
                percent={this.state.progressTest}
                indicating
                autoSuccess
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FlexTest;
