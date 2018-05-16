import * as React from 'react';

class Error extends React.Component {
  public state = {
    error: null,
    hasError: false,
    info: null
  };
  public componentDidCatch(error, info) {
    this.setState({ error, info, hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      const { error, info } = this.state;
      return (
        <div>
          <h1>you broke it dingus!</h1>
          <p>{error.message}</p>
          <p>
            {info.componentStack.split('\n').map(i => (
              <span>
                {i}
                <br />
              </span>
            ))}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Error;
