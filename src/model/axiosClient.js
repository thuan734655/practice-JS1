import axios from 'axios';

const configAxios = {
  baseUrl: 'http://localhost:3000',
  header: {
    'Content-Type': 'application/json',
  },
};

const axiosClient = axios.create(configAxios);

axiosClient.interceptors.response.use (
    (res) => res.data, 
    (err) => Promise.reject(err)
);

export default axiosClient;
