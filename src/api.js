import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['api_key'] = "3b9c855ca7a0d956e18519ef7fbbaf8f";
  config.params['language'] = "en-US";
  return config;
});

export default api;