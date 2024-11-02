import validateLoginForm from '../helper/fromValidates.js';
import Router from '../router/Router.js';
import handleLogin from '../services/login.service.js';
import registerPage from '../view/components/register.js';
import registerController from './register.controller.js';

/** Main function for login page events */
const login = () => {
  // Select elements only once for reuse
  const btnLogin = document.querySelector('.btn-login');
  const registerLink = document.querySelector('.register');
  const inputPassword = document.querySelector('.input-password');
  const iconEye = document.querySelector('.icon-eye');

  /** Toggle visibility of password field */
  const togglePasswordVisibility = () => {
    const isHidden = iconEye.getAttribute('select') === 'false';
    inputPassword.type = isHidden ? 'text' : 'password';
    iconEye.setAttribute('select', isHidden ? 'true' : 'false');
  };

  /** Handle login button click */
  btnLogin.addEventListener('click', () => {
    const email = document.querySelector('.input-email').value;
    const password = inputPassword.value;

    const validate = validateLoginForm(email, password);
    if (validate.length > 0) {
      validate.forEach((error) => alert(error)); // Show each validation error
    } else {
      handleLogin(email, password); // Proceed with login if validation passes
    }
  });

  /** Open registration page */
  registerLink.addEventListener('click', () => {
    document.querySelector('.section-main-register').innerHTML = registerPage();
    registerController();
  });

  /** Toggle password visibility on eye icon click */
  iconEye.addEventListener('click', togglePasswordVisibility);
};

export default login;
