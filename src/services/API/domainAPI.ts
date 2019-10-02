import { apiRequest, methods } from '../API/apiRoot';

export const domainAPI = {
  async getDomainWHOIS(body) {
    return apiRequest(`/Domain/${body}`, methods.GET);
  }
};

export default domainAPI;
