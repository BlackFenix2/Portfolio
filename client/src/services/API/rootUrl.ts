const mode = process.env.NODE_ENV;

// get current hostname
const hostname = window && window.location && window.location.hostname;

// determine if app is staging
const staging = hostname === process.env.STAGING;

let internalRrootUrl = '';
if (mode === 'development') {
  internalRrootUrl = 'http://localhost:5000/api';
} else if (staging) {
  internalRrootUrl = 'https://fhs-webapi.azurewebsites.net/api';
} else {
  internalRrootUrl = 'https://fhs-webapi.azurewebsites.net/api';
}

const rootUrl = internalRrootUrl;

export default rootUrl;
