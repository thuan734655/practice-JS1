import Router from '../router/Router';

/**
 * Handles link navigation with optional login fallback.
 * @param {Event} event - The click event.
 * @param {HTMLElement} link - The link element clicked.
 */
const handle = (event, link) => {
  event.preventDefault();
  const href = link.getAttribute('href');
  if (href) {
    Router.navigateTo(href);
  } else {
    Router.navigateTo('/login'); 
  }
};

/**
 * Sets up event listeners for header navigation links and logo click.
 */
const headerController = () => {
  //Header home
  document.querySelectorAll('.header--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link);
    });
  });
// Header login
  document.querySelectorAll('.header-login--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link);
    });
  });

  //Logo
  document.querySelector('.logo').addEventListener('click', () => {
      Router.navigateTo('/home'); 
  });
};

export { headerController };
