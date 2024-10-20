import Router from '../router/Router';
import axiosClient from "./axiosClient.js";

const handleLogin = async () => {
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;
  const router = new Router();
  const reqBody = { email: email, password: password };
  try {
    const res = await axiosClient.post('/user/login', reqBody);
    if (res && res.status) {
      switch (res.status) {
        case 200:
          console.log('Login successful');
          router.navigateTo('/home');
          break;
        case 400:
          console.log('Invalid email or password');
          break;
        case 401:
          console.log('Unauthorized access');
          break;
        default:
          console.log('Login failed with status:', res.status);
      }
    } else {
      console.log('Invalid response received');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed');
  }
};

export default handleLogin;
