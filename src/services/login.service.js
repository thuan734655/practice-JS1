import Router from '../router/Router';
import axiosClient from './axiosClient.js';

const handleLogin = async (email, password) => {
  const reqBody = { email: email, password: password };
  try {
    const res = await axiosClient.post('/login', reqBody, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed due to a network error or request failure');
  }
};

export default handleLogin;
