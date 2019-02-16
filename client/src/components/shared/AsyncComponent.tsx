import * as React from 'react';
import Loading from './Loading';

interface Props {
  LazyComponent: React.LazyExoticComponent<any>;
  mockDelay?: number;
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

  componentDidCatch(error: any, info: any) {
    this.setState({ error, info, hasError: true });
  }

  render() {
    const { error, info } = this.state;

    const { LazyComponent } = this.props;
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
      <AsyncLoader LazyComponent={LazyComponent} />
    );
  }
}

const AsyncLoader = props => {
  const { LazyComponent } = props;
  return (
    <React.Suspense fallback={<Loading />}>
      <LazyComponent />
    </React.Suspense>
  );
};

export default AsyncComponent;
