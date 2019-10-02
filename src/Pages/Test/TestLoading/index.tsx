import * as React from 'react';
import AsyncComponent from 'src/components/shared/AsyncComponent';

const TestComponent = () => (
  <div>
    <p>Page is loaded, waiting for submodules...</p>
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
