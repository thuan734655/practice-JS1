import Router from '../router/Router';

const handle = (event, link) => {
  event.preventDefault();
  const href = link.getAttribute('href');
  if (href) {
    Router.navigateTo(href);
  } else {
    Router.navigateTo('/login');
  }
};
const headerController = () => {
  //header of home...
  document.querySelectorAll('.header--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link);
    });
  });
  //header of login...
  document.querySelectorAll('.header-login--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link);
    });
  });
  //logo
  document.querySelector('.logo').addEventListener('click', () => {
    if (middleware('logo')) {
      Router.navigateTo('/home');
    }
  });
};

export { headerController };
