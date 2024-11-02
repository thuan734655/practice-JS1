import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://practice-js-server.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error('Axios error:', err);
    return Promise.reject(err);
  }
);

export default axiosClient;
