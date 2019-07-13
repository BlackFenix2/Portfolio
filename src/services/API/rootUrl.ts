const mode = process.env.NODE_ENV;

// get current hostname
const hostname = window && window.location && window.location.hostname;

// determine if app is staging
const staging = hostname === process.env.STAGING;

let internalRootUrl = '';
if (mode === 'development') {
  internalRootUrl = 'http://localhost:5000/api';
} else if (staging) {
  internalRootUrl = 'https://fhs-webapi.azurewebsites.net/api';
} else {
  internalRootUrl = 'https://fhs-webapi.azurewebsites.net/api';
}

const rootUrl = internalRootUrl;

export default rootUrl;
