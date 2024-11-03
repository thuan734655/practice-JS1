import Router from '../router/Router';

const errorController = () => {
  const button = document.querySelector('.body--button');
  
  button.addEventListener('click', () => {
    if (button.textContent === 'Go login') {
      Router.navigateTo('/login'); 
    } else {
      Router.navigateTo('/home');
    }
  });
};

export default errorController;
