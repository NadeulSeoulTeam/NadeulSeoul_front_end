import baseAxios from 'axios';
import { getToken } from './JWT-Token'; // JWT- Token에서 보내주는 getToken 메서드 활용

const axios = baseAxios.create({
  baseURL: '/api/v1',
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default axios;
