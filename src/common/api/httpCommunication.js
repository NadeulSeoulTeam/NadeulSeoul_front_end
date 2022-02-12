import baseAxios from 'axios';

const axios = baseAxios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// token 생성시 안에 getToKen함수 만들어서 진행 => universal cookie의 getCookie method 활용
// axios.interceptors.request.use((config) => {
//   config.headers.Authorization = 'Bearer적고 뒤에 getCookie함수';
//   return config;
// });

export default axios;
