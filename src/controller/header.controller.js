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
    Router.navigateTo(href); // Navigate to href if present
  } else {
    Router.navigateTo('/login'); // Default to login page if href is missing
  }
};

/**
 * Sets up event listeners for header navigation links and logo click.
 */
const headerController = () => {
  // Attach click handler to home header navigation links
  document.querySelectorAll('.header--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link);
    });
  });

  // Attach click handler to login header navigation links
  document.querySelectorAll('.header-login--nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      handle(event, link);
    });
  });

  // Logo click event to navigate to home with middleware check
  document.querySelector('.logo').addEventListener('click', () => {
    if (middleware('logo')) {
      Router.navigateTo('/home'); // Navigate to home if middleware passes
    }
  });
};

export { headerController };
