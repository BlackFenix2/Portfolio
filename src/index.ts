import app from 'src/App';

import * as config from '../tools/config';
import * as tools from '../tools/render';

import htmlParams from '../tools/htmlParams';

// Insert App component here
tools.renderApp(app, htmlParams.rootID);

// register service worker if https is configured
config.registerServiceWorker();

// add Hot Module Reloading (needed for lazy imports)
if (module.hot) {
  module.hot.accept();
}
