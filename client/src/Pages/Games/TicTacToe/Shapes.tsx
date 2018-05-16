import * as React from 'react';

import { faCircle, faSnowflake } from '@fortawesome/fontawesome-free-regular';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import Ico from '@fortawesome/react-fontawesome';

export const Times = () => <Ico icon={faTimes} size="10x" />;

export const Circle = () => <Ico icon={faCircle} size="10x" />;

export const Blank = props => (
  <Ico icon={faSnowflake} onClick={props.clicked} size="10x" />
);
