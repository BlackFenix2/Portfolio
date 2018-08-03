import * as React from 'react';

interface State {
  value: string;
}

export default class Login extends React.Component<any, State> {
  public state = {
    value: 'Empty'
  };

  public componentDidMount() {
    this.setState({
      value: localStorage.getItem('test')
    });
  }
  public getStorage = () => {
    this.setState({
      value: localStorage.getItem('test')
    });
  };

  public setStorage = item => {
    localStorage.setItem('test', this.state.value);
  };

  public changeValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  public render() {
    return (
      <div>
        <h1>Login Test</h1>
        <p>Storage: {this.state.value}</p>
        <hr />
        <input value={this.state.value} onChange={this.changeValue} />
        <button onClick={this.setStorage}>Set Localstorage</button>
        <button onClick={this.getStorage}>Get Localstorage</button>
      </div>
    );
  }
}
