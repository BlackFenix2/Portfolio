import app from './App';

import * as tools from '../tools/render';

// Insert App component here
tools.renderApp(app, 'react-app');

// register service worker if https is configured
tools.registerServiceWorker();
