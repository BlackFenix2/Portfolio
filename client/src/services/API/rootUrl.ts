const mode = process.env.NODE_ENV;
const staging = process.env.NODE_ENV_STAGING;
let rootUrl = '';
if (mode === 'development') {
  rootUrl = 'http://localhost:5000/api';
} else if (staging === 'true') {
  rootUrl = 'https://fhs-dev-webapi.herokuapp.com/api';
} else {
  rootUrl = 'https://fhs-webapi.herokuapp.com/api';
}

export default rootUrl;
