import Router from '../router/Router';

const headerController = () => {
  const router = new Router();

  document.querySelectorAll('.header--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (href) {
        if (href == '/login') {
          router.navigateTo(href);
        } else {
          router.navigateTo('/home');
        }
      }
    });
  });
};
const headerLoginController = () => {
  const router = new Router();

  document.querySelectorAll('.header--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      if (href) {
        router.navigateTo(href);
      }
    });
  });
};

export { headerController, headerLoginController };
