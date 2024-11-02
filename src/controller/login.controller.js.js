import validateLoginForm from '../helper/fromValidates.js';
import Router from '../router/Router.js';
import handleLogin from '../services/login.service.js';
import registerPage from '../view/components/register.js';
import registerController from './register.controller.js';

const login = () => {
  // Select elements only once to reuse
  const btnLogin = document.querySelector('.btn-login');
  const registerLink = document.querySelector('.register');
  const inputPassword = document.querySelector('.input-password');
  const iconEye = document.querySelector('.icon-eye');

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    const isHidden = iconEye.getAttribute('select') === 'false';
    inputPassword.type = isHidden ? 'text' : 'password';
    iconEye.setAttribute('select', isHidden ? 'true' : 'false');
  };

  // Login event
  btnLogin.addEventListener('click', () => {
    const email = document.querySelector('.input-email').value;
    const password = inputPassword.value;

    const validate = validateLoginForm(email, password);
    if (validate.length > 0) {
      validate.forEach((error) => {
        alert(error);
      });
    } else {
      handleLogin(email, password);
    }
  });

  // Event to open the registration page
  registerLink.addEventListener('click', () => {
    document.querySelector('.section-main-register').innerHTML = registerPage();
    registerController();
  });

  // Event to toggle password visibility
  iconEye.addEventListener('click', togglePasswordVisibility);
};

export default login;
