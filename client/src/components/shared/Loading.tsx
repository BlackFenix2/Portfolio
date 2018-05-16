import { faSync } from '@fortawesome/fontawesome-free-solid';
import Icon from '@fortawesome/react-fontawesome';
import * as React from 'react';

const Loading = () => (
  <div className="w3-center w3-padding w3-panel">
    <h2>Loading now</h2>
    <Icon icon={faSync} spin size="5x" />
    {/* <ReactLoading
      className="preloader"
      type="spinningBubbles"
      color="black"
      delay={0}
    /> */}
  </div>
);

export default Loading;
