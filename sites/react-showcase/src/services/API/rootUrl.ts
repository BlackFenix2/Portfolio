const mode = process.env.NODE_ENV;

let internalRootUrl = '';
if (mode === 'development') {
  internalRootUrl = 'https://localhost:5001/api';
} else {
  internalRootUrl = 'https://fhs-webapi.azurewebsites.net/api';
}

const rootUrl = internalRootUrl;

export default rootUrl;
