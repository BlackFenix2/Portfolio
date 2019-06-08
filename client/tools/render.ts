import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

export const renderApp = (App, target) => {
  const main = document.getElementById(target);

  // render or hydrate depending on SSR status
  // const renderMethod = main.children.length > 1 ? 'hydrate' : 'render';

  // temp render untill senamtic-ui is replaced with Material-UI
  const tempRenderMethod = 'render';

  const AppContainer = hot(App);
  // hot load application
  ReactDOM[tempRenderMethod](React.createElement(AppContainer), main);
};

export default {};
