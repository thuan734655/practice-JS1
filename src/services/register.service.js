import Router from '../router/Router';
import axiosClient from './axiosClient.js';

const handleRegister = async (email, password, fullname) => {
  const reqBody = { email: email, password: password, fullname: fullname };
  try {
    const res = await axiosClient.post('/register', reqBody, {
      withCredentials: true,
    });
    const { success, message } = res;
    console.log(res);
    if (success) {
      Router.navigateTo('/login');
    } else {
      console.log(message);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed due to a network error or request failure');
  }
};

export default handleRegister;
