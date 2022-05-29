import baseAxios from 'axios';
import { getToken } from './JWT-Token';

const axios = baseAxios.create({
  baseURL: 'http://nadeulseoul.ga/api/v1',
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

export default axios;
