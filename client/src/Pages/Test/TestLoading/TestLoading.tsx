import * as React from 'react';
import AsyncComponent from 'src/components/shared/AsyncComponent';

const TestComponent = () => (
  <div>
    <p>Page is loaded, waiting for submodules...</p>
    <AsyncComponent
      mockDelay={2000}
      importStatement={import('./MediaExample')}
    />
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
