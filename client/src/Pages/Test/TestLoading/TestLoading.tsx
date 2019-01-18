import * as React from 'react';
import Loading from 'src/components/shared/Loading';
import FullExample from './FullExample';
// import MediaExample from './MediaExample';

const test = 'MediaExample';
const MediaExample = React.lazy(() => import(`./${test}`));

const TestComponent = () => (
  <div>
    <React.Suspense fallback={<Loading />}>
      <FullExample />
      <MediaExample />
    </React.Suspense>
  </div>
);

const TestLoading = () => <TestComponent />;

export default TestLoading;
