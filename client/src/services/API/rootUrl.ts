const mode = process.env.NODE_ENV;

// get current hostname
const hostname = window && window.location && window.location.hostname;

// determine if app is staging
const staging = hostname === process.env.STAGING;

let rootUrl = '';
if (mode === 'development') {
  rootUrl = 'http://localhost:5000/api';
} else if (staging) {
  rootUrl = 'https://fhs-webapi.azurewebsites.net/api';
} else {
  rootUrl = 'https://fhs-webapi.azurewebsites.net/api';
}

export default rootUrl;
