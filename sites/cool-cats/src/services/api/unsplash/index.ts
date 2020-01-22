import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization:
      'Client-ID 0f2d5e5b828d8e1ec0afb64a37fcb0db97c159152e57edd6879b113f02a34d33'
  }
});

export const getCats = async () => {
  const result = await api.get('/search/photos', {
    params: {
      query: 'cats',
      per_page: 12
    }
  });

  return result.data;
};

export default api;
