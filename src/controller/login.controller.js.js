import Router from '../router/Router.js';
import handleLogin from '../services/login.service.js';
import registerPage from '../view/components/register.js';
import { headerLoginController } from './header.controller.js';
import registerController from './register.controller.js';

function login() {
  headerLoginController();
  const router = new Router();
  document.querySelector('.btn-login').addEventListener('click', () => {
    const email = document.querySelector('.input-email').value;
    const password = document.querySelector('.input-password').value;
    handleLogin(email, password);
  });
  document.querySelector('.register').addEventListener('click', () => {
    document.querySelector('.section-main-register').innerHTML = registerPage();
    registerController(); // call controller of register page
  });
}

export default login;
