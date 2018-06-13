const mode = process.env.NODE_ENV;

// get current hostname
const hostname = window && window.location && window.location.hostname;

// determine if app is staging
const staging = hostname === process.env.STAGING;

let rootUrl = '';
if (mode === 'development') {
  rootUrl = 'http://localhost:5000/api';
} else if (staging) {
  rootUrl = 'https://fhs-dev-webapi.herokuapp.com/api';
} else {
  rootUrl = 'https://fhs-webapi.herokuapp.com/api';
}

export default rootUrl;
