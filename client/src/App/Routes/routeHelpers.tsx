import * as React from 'react';

import AsyncComponent from 'src/components/shared/AsyncComponent';

export function setPageRouteSuspenseAsync(Name) {
  const item = React.lazy(() => import(`src/Pages${Name}`));
  return <AsyncComponent LazyComponent={item} />;
}
