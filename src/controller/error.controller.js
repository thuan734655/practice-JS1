import Router from '../router/Router';

/** 
 * Handles redirection based on button text in error view.
 */
const errorController = () => {
  const button = document.querySelector('.body--button');
  
  // Set up click event to navigate based on button label
  button.addEventListener('click', () => {
    if (button.textContent === 'Go login') {
      Router.navigateTo('/login'); // Navigate to login if button text is "Go login"
    } else {
      Router.navigateTo('/home'); // Otherwise, navigate to home
    }
  });
};

export default errorController;
