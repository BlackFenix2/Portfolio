import * as React from 'react';

type Props = {
  children: React.ReactNode;
};
class Error extends React.Component<Props> {
  state = {
    error: null,
    hasError: false,
    info: null,
  };

  componentDidCatch(error, info) {
    this.setState({ error, info, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      const { error, info } = this.state;
      return (
        <div>
          <h1>you broke it doofus!</h1>
          <p>{error.message}</p>

          <p>
            {info.componentStack
              .split('\n')
              .map((i: React.ReactNode, key: React.ReactText) => (
                <span key={key}>
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
