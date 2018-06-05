import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

export const renderApp = (App, target) => {
  const main = document.getElementById(target);

  // render or hydrate depending on SSR status
  const renderMethod = main.hasChildNodes() ? 'hydrate' : 'render';

  // hot load application
  const AppContainer = hot(module)(App);
  ReactDOM[renderMethod](<AppContainer />, main);
};

export const registerServiceWorker = () => {
  if (window.location.protocol === 'https:' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
};
