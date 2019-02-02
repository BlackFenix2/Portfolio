import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

export const renderApp = (App, target) => {
  const main = document.getElementById(target);

  // render or hydrate depending on SSR status
  const renderMethod = main.children.length > 1 ? 'hydrate' : 'render';

  // temp render untill senamtic-ui is replaced with Material-UI
  const tempRenderMethod = 'render';
  // hot load application
  const AppContainer = hot(module)(App);
  ReactDOM[tempRenderMethod](React.createElement(AppContainer), main);
};
