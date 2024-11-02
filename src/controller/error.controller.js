import getCookie from '../helper/getCookie';
import Router from '../router/Router';

const errorController = () => {
  document.querySelector('.body--button').addEventListener('click', () => {
    const idUser = getCookie('idUser');
    if (idUser) {
      Router.navigateTo('/home');
    } else {
      alert('You must log in');
      Router.navigateTo('/login');
    }
  });
};

export default errorController;
