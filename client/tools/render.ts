import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

export const renderApp = (App, target) => {
  const main = document.getElementById(target);

  // render or hydrate depending on SSR status
  // const renderMethod = main.children.length > 1 ? 'hydrate' : 'render';
  const renderMethod = 'render';
  // hot load application
  const AppContainer = hot(module)(App);
  ReactDOM[renderMethod](React.createElement(AppContainer), main);
};
