import getCookie from '../helper/getCookie';
import Router from '../router/Router';

const errorController = () => {
  const router = new Router();
  document.querySelector('.body--button').addEventListener('click', () => {
    const idUser = getCookie('idUser');
    if (idUser) {
      router.navigateTo('/home');
    } else {
      alert('must login');
      router.navigateTo('/login');
    }
  });
};

export default errorController;
