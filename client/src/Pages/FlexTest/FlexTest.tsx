import * as React from 'react';
import { Button, Grid, Progress } from 'semantic-ui-react';
import API from 'src/services/norrisApi';
import TestForm from './TestForm';

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
                  src={this.state.apiResult.icon_url}
                  alt="Chuck Norris Image"
                />
              </Button>
              <TestForm onSubmit={this.submit} />
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
