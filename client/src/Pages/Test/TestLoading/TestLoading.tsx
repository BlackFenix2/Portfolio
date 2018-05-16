import * as React from 'react';
import Loading from 'src/components/shared/Loading';
const TestComponent = () => (
  <div>
    <Loading />
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
