import * as React from 'react';
import Loading from './Loading';

interface Props {
  mockDelay?: number;
  importStatement: Promise<any>;
}

interface State {
  error: {};
  hasError: boolean;
  info: string;
}

class AsyncComponent extends React.Component<Props, State> {
  state = {
    error: null,
    hasError: false,
    info: null,
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ error, info, hasError: true });
  }

  render() {
    const { error, info } = this.state;

    return this.state.hasError ? (
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
    ) : (
      <AsyncLoader
        mockDelay={this.props.mockDelay}
        importStatement={this.props.importStatement}
      />
    );
  }
}

const AsyncLoader = (props) => {
  const { mockDelay, importStatement } = props;

  const Item = React.lazy(() =>
    Promise.all([
      importStatement,
      new Promise((resolve) => setTimeout(resolve, mockDelay)),
    ]).then(([moduleExports]) => moduleExports)
  );

  return (
    <React.Suspense fallback={<Loading />}>
      <Item />
    </React.Suspense>
  );
};

export default AsyncComponent;
