import * as React from 'react';
import AsyncComponent from 'src/components/shared/AsyncComponent';
import MediaExample from './MediaExample';

const TestComponent = () => (
  <div>
    <AsyncComponent importPath="./MediaExample" />
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
