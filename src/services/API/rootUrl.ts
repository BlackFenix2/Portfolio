const mode = process.env.NODE_ENV;

let internalRootUrl = '';
if (mode === 'development') {
  internalRootUrl = 'http://localhost:5000/api';
} else {
  internalRootUrl = 'https://fhs-webapi.azurewebsites.net/api';
}

const rootUrl = internalRootUrl;

export default rootUrl;
