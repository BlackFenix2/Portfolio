import * as React from 'react';
import { Icon } from 'semantic-ui-react';

const LoadingIcon = (props: { active: boolean }) => (
  <Icon name="sync" loading={props.active} />
);

export default LoadingIcon;
