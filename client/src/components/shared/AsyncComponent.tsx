import * as React from 'react';
import Loading from './Loading';

interface Props {
  importPath: string;
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
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info, hasError: true });
  }

  render() {
    const { error, info } = this.state;
    // tslint:disable-next-line:no-this-assignment
    const { importPath } = this.props;
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
      <AsyncLoader importPath={importPath} />
    );
  }
}

const AsyncLoader = props => {
  const LazyComponent = React.lazy(() => import(`${props.importPath}`));
  return (
    <React.Suspense fallback={<Loading />}>
      <LazyComponent />
    </React.Suspense>
  );
};

export default AsyncComponent;
