import * as React from 'react';

import { css } from '@emotion/core';
import SEO from 'src/components/modules/SEO';
import { FormControl, TextField, Button, Divider } from '@material-ui/core';
import { Form } from 'informed';

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

class Cats extends React.Component<{}, State> {
  state = {
    result: 200,
    number: 200
  };

  change = async e => {
    this.setState({ result: e.target.value });
  };

  GetCat = () => {
    this.setState(prevState => ({ number: prevState.result }));
  };

  render() {
    return (
      <>
        <SEO title="Cats" />
        <div>
          <h2>HTTP Cats</h2>
          <img
            src={`https://http.cat/${this.state.number}.jpg`}
            alt="No cat found :("
            css={catImage}
          />
          <Divider />
          <Form onSubmit={this.GetCat}>
            <FormControl>
              <TextField
                placeholder="Enter search term"
                label="HTTP Status Code"
                value={this.state.result}
                onChange={this.change}
              />
              <Button variant="contained" color="primary">
                Show me a cat
              </Button>
            </FormControl>
          </Form>
        </div>
      </>
    );
  }
}

export default Cats;
