import Router from '../router/Router';
import boxState from '../view/components/box-state.js';
import axiosClient from './axiosClient.js';

const handleLogin = async (email, password) => {
  const router = new Router();
  const reqBody = { email: email, password: password };
  try {
    const res = await axiosClient.post('/login', reqBody);
    const { success, message } = res;
    if (success) {
      // const boxStateElemenet = document.createElement('div');
      // boxStateElemenet.innerHTML = boxState({
      //   classState: 'success',
      //   title: 'successful',
      //   desc: 'login successful',
      // });
      // console.log(boxStateElemenet);
      // document
      //   .querySelector('.section-main-login')
      //   .appendChild(boxStateElemenet);

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
