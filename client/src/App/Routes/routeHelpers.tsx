import loadableComponents from 'loadable-components';
import React from 'react';
import Loading from 'src/components/shared/Loading';
import NotFound from 'src/components/shared/NotFound';

const config = {
  ErrorComponent: ({ error }) => (
    <NotFound code={error.code} message={error.message} />
  ),
  LoadingComponent: () => <Loading />
};

// const pageUrl = 'src/Pages';

export function setPageRouteAsync(Name) {
  return loadableComponents(() => import(`src/Pages${Name}`), {
    ...config
  });
}
