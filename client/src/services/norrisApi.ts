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
  }
};

export default appService;
