import { externalApiRequest, methods } from './API/apiRoot';

const rootUrl = 'https://api.chucknorris.io';

const appService = {
  async getPosts() {
    return externalApiRequest(`${rootUrl}/jokes/random`, methods.GET);
  }
};

export default appService;
