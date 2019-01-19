import * as React from 'react';
import { Button, Grid, Progress } from 'semantic-ui-react';
import { Form, ResetButton, SubmitButton } from 'src/components/form';
import { TextInput } from 'src/components/inputs';
import API from 'src/services/norrisApi';

interface State {
  value: {};
  progressTest: number;
  apiResult: {};
}

class FlexTest extends React.Component<any, State> {
  state = {
    value: {},
    progressTest: 0,
    apiResult: {
      value: '',
      icon_url: ''
    }
  };
  componentDidMount() {
    this.test();
  }

  submit = value => {
    this.setState({ value });
  };
  change = event => {
    this.setState({ progressTest: parseInt(event.target.value, 10) });
  };
  test = async () => {
    const result = await API.getPosts();
    this.setState({ apiResult: result });
  };

  render() {
    return (
      <React.Fragment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <p>{this.state.apiResult.value}</p>

              <Button onClick={this.test}>
                <img
                  onClick={this.test}
                  src={this.state.apiResult.icon_url}
                  alt="Chuck Norris Image"
                />
              </Button>
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
