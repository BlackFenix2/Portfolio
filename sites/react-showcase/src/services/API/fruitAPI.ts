import { apiRequest, methods } from '../API/apiRoot';

export const fruitAPI = {
  async addFruit(body) {
    return apiRequest('/Fruits', methods.POST, body);
  },
  async updateFruit(body) {
    return apiRequest(`/Fruits/${body.id}`, methods.PUT, body);
  },
  async deleteFruit(id) {
    return apiRequest(`/Fruits/${id}`, methods.DELETE);
  },
  async getFruitList() {
    return apiRequest('/Fruits', methods.GET);
  },
  async getFruit(body) {
    return apiRequest(`/Fruits/${body.id}`, methods.GET);
  },
};

export default fruitAPI;
