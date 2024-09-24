import axios from 'axios';

const base = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

base.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default base;
