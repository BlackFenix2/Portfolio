import * as React from 'react';
import { Icon } from 'semantic-ui-react';
const LoadingIcon = props => <Icon name="sync" loading={props.active} />;

export default LoadingIcon;
