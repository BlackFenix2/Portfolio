import { faSync } from '@fortawesome/fontawesome-free-solid';
import Icon from '@fortawesome/react-fontawesome';
import * as React from 'react';

const LoadingIcon = props => <Icon icon={faSync} spin={props.active} />;

export default LoadingIcon;
