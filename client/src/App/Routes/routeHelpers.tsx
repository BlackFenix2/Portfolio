import * as React from 'react';

import AsyncComponent from 'src/components/shared/AsyncComponent';

export function setPageRouteSuspenseAsync(Name) {
  return <AsyncComponent importStatement={import(`src/Pages${Name}`)} />;
}
