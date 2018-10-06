import * as React from 'react';
import { Login as LoginModal } from 'src/App/Authentication';
import Register from 'src/App/Authentication/Register';
interface State {
  value: string;
  localStorage: string;
}

export default class Login extends React.Component<any, State> {
  public state = {
    value: '',
    localStorage: ''
  };

  public componentDidMount() {
    this.setState({
      localStorage: localStorage.getItem('test')
    });
  }
  public getStorage = () => {
    this.setState({
      localStorage: localStorage.getItem('test')
    });
  };

  public setStorage = () => {
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
        <p>Storage: {this.state.localStorage}</p>
        <hr />

        <div>
          <input value={this.state.value} onChange={this.changeValue} />
          <button onClick={this.setStorage}>Set Localstorage</button>
          <button onClick={this.getStorage}>Get Localstorage</button>
        </div>
        <Register />
        <LoginModal />
      </div>
    );
  }
}
