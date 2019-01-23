import * as React from 'react';
import AsyncComponent from 'src/components/shared/AsyncComponent';

const MediaExample = React.lazy(() => import('./MediaExample'));

const TestComponent = () => (
  <div>
    <AsyncComponent LazyComponent={MediaExample} />
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
