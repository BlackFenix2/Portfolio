import React from 'react';
import Fullscreen from 'react-fullscreen-crossbrowser';

const FullExample = () => (
  <div className="App">
    <button onClick={() => this.setState({ isFullscreenEnabled: true })}>
      Go Fullscreen
    </button>
    <Fullscreen
      enabled={false}
      onChange={isFullscreenEnabled => this.setState({ isFullscreenEnabled })}
    >
      <div className="full-screenable-node">
        Hi! This may cover the entire monitor.
      </div>
    </Fullscreen>
  </div>
);

export default FullExample;
