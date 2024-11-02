import Router from '../router/Router';
import getCookie from '../helper/getCookie';

const handle = (event, link, router) => {
  event.preventDefault();
  const href = link.getAttribute('href');
  if (href && middleware(href)) {
    if (href == '/login' || href == '/add') {
      router.navigateTo(href);
    } else {
      router.navigateTo('/home');
    }
  }
};

const middleware = (href) => {
  const idUser = getCookie('idUser');
  if (idUser > 0 || href == '/login') return true;
  else {
    alert('must login');
    return false;
  }
};

const headerController = () => {
  const router = new Router();
  //header of home...
  document.querySelectorAll('.header--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link, router);
    });
  });
  //header of login...
  document.querySelectorAll('.header-login a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link, router);
    });
  });
  //logo
  document.querySelector('.logo').addEventListener('click', () => {
    if (middleware('logo')) {
      router.navigateTo('/home');
    }
  });
};

export { headerController };
