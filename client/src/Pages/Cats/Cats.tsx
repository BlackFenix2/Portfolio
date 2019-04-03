import * as React from 'react';
import { Button, Form, Input, Label } from 'semantic-ui-react';

import { css } from '@emotion/core';

interface State {
  result: number;
  number: number;
}

const catImage = css`
  width: 100%;
  height: auto;

  @media screen and (min-width: 767px) {
    width: auto;
    height: auto;
  }
`;

class Cats extends React.Component<any, State> {
  state = {
    result: 200,
    number: 200
  };

  change = async e => {
    this.setState({ result: e.target.value });
  };

  GetCat = async e => {
    this.setState({ number: this.state.result });
  };

  render() {
    return (
      <div>
        <h2>HTTP Cats</h2>
        <img
          src={`https://http.cat/${this.state.number}.jpg`}
          alt="No cat found :("
          css={catImage}
        />

        <hr />
        <Form onSubmit={this.GetCat}>
          <Form.Field>
            <Label pointing="below">HTTP Status</Label>
            <Input
              type="search"
              placeholder="Enter search term"
              value={this.state.result}
              onChange={this.change}
            />
          </Form.Field>
          <Button>Click for Cats</Button>
        </Form>
      </div>
    );
  }
}

export default Cats;
