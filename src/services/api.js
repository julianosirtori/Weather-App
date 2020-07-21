import axios from 'axios';
import { setWeather } from './storage';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/',
});

api.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.params = config.params || {};
  newConfig.params.APPID = `${process.env.REACT_APP_API_KEY}`;
  newConfig.params.lang = 'pt_br';
  newConfig.params.units = 'metric';
  return newConfig;
});

async function fetchForecastDaily(latitude, longitude) {
  const response = await api.get('/data/2.5/onecall', {
    params: {
      lon: longitude,
      lat: latitude,
      exclude: 'hourly,minutely,current',
    },
  });
  return response.data;
}

async function fetchCurrentWeather(params) {
  const response = await api.get('/data/2.5/weather', { params });
  return response.data;
}

export async function fetchWeather(params) {
  const data = await fetchCurrentWeather(params);
  const { coord } = data;
  let { daily } = await fetchForecastDaily(coord.lat, coord.lon);
  daily = daily.slice(3);
  setWeather({ ...data, daily });
  return { ...data, daily };
}

export default api;
