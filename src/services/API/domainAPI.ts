import { apiRequest, methods } from '../API/apiRoot';

export const domainAPI = {
  async getDomainWHOIS(domain: string) {
    return apiRequest(`/Domain/${domain}`, methods.GET);
  }
};

export default domainAPI;
