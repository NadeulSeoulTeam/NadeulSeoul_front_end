import baseAxios from 'axios';
import { getToken } from './JWT-Token'; // JWT- Token에서 보내주는 getToken 메서드 활용

const axios = baseAxios.create({
  baseURL: '/api/v1',
  // headers: {
  //   Authorization: `Bearer ${getToken()}`,
  // },
});

// token 생성시 안에 getToKen함수 만들어서 진행 => universal cookie의 getCookie method 활용
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

export default axios;
