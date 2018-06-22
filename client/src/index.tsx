import app from 'src/App';

import * as tools from '../tools/render';

import * as config from '../tools/config';
import htmlParams from '../tools/htmlParams';

// Insert App component here
tools.renderApp(app, htmlParams.rootID);

// register service worker if https is configured
config.registerServiceWorker();
