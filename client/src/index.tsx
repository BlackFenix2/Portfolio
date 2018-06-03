import React from 'react';
import ReactDOM from 'react-dom';
import app from './App';

// preload routes for SSR
const renderApp = (App, target) => {
  const main = document.getElementById(target);

  // render or hydrate depending on SSR status
  const renderMethod = main.hasChildNodes() ? 'hydrate' : 'render';

  ReactDOM[renderMethod](<App />, main);
};

const registerServiceWorker = () => {
  if (window.location.protocol === 'https:' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
};

// Insert App component here
renderApp(app, 'react-app');

// register service worker if https is configured
registerServiceWorker();
