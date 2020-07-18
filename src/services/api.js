import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['APPID'] = `${process.env.REACT_APP_API_KEY}`;
  return config;
});

export default api;
