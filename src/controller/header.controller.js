import Router from '../router/Router';

const headerController = () => {
  const router = new Router();
  document
    .querySelector('.logo')
    .addEventListener('click', () => {
      router.navigateTo('/home');
    });
};

export default headerController;
