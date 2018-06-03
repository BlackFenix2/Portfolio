import loadableComponents from 'loadable-components';
import React from 'react';
import Loading from 'src/components/shared/Loading';
import NotFound from 'src/components/shared/NotFound';

const config = {
  ErrorComponent: props => (
    <NotFound code={props.error.code} message={props.error.message} />
  ),
  LoadingComponent: () => <Loading />
};

// const pageUrl = 'src/Pages';

export function setPageRouteAsync(Name) {
  return loadableComponents(() => import(`src/Pages${Name}`), {
    ...config
  });
}
