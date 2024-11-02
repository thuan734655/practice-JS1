import Router from '../router/Router';

const errorController = () => {
  const router = new Router();
  document.querySelector('.body--button').addEventListener('click', () => {
    router.navigateTo('/home');
  });
};

export default errorController;
