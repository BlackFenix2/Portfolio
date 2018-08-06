import axios from 'axios';

axios.defaults.baseURL = 'https://api.chucknorris.io';

const appService = {
  getPosts() {
    return new Promise(resolve => {
      axios
        .get('/jokes/random')
        .then(response => {
          resolve(response.data);
        })
        .catch(error => error);
    });
  },

  getPostsAsync() {
    return new Promise(resolve => {
      setTimeout(() => resolve('test async'), 2000);
    });
  }
};

export default appService;
