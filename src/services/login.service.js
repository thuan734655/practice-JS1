import Router from '../router/Router';
import axiosClient from './axiosClient.js';
import getCookie from '../helper/getCookie.js';

const handleLogin = async (email, password) => {
  const router = new Router();
  const reqBody = { email: email, password: password };
  try {
    const res = await axiosClient.post('/login', reqBody, {
      withCredentials: true,
    });
    const { success, message } = res;
    console.log(res);
    if (success) {
      router.navigateTo('/home');
    } else {
      console.log(message);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed due to a network error or request failure');
  }
};

export default handleLogin;
