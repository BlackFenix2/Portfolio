import * as React from 'react';
import Loading from 'src/components/shared/Loading';
import FullExample from './FullExample';
import MediaExample from './MediaExample';
const TestComponent = () => (
  <div>
    <FullExample />
    <MediaExample />
    <Loading />
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
