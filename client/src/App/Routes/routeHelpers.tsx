import * as React from 'react';
import universal from 'react-universal-component';
import Loading from 'src/components/shared/Loading';
import NotFound from 'src/components/shared/NotFound';

const config = {
  error: props => (
    <NotFound code={props.error.code} message={props.error.message} />
  ),
  loading: () => <Loading />,
  minDelay: 300
};

// const pageUrl = 'src/Pages';

export function setPageRouteAsync(Name) {
  return universal(() => import(`src/Pages${Name}`), { ...config });
}
