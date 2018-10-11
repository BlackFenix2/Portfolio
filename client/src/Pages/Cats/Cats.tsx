import * as React from 'react';
import { Button, Form, Input, Label } from 'semantic-ui-react';
interface State {
  result: number;
  number: number;
}

import styles from './Cats.module.css';

class Cats extends React.Component<any, State> {
  public state = {
    result: 200,
    number: 200
  };

  public change = async e => {
    this.setState({ result: e.target.value });
  };

  public GetCat = async e => {
    this.setState({ number: this.state.result });
  };
  public render() {
    return (
      <div>
        <h2>HTTP Cats</h2>
        <img
          src={`https://http.cat/${this.state.number}.jpg`}
          alt="No cat found :("
          className={styles.img}
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
