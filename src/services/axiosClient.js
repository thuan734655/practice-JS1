import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://practice-js-server.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default axiosClient;
