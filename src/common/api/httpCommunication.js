import baseAxios from 'axios';

const axios = baseAxios.create({
  baseURL: 'https://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
