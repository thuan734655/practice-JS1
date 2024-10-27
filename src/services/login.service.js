import Router from '../router/Router';
import boxState from '../view/components/box-state.js';
import axiosClient from './axiosClient.js';

const login_api = async (reqBody) => {
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
    console.log('error => ' + error);
  }
};

export default login_api;
