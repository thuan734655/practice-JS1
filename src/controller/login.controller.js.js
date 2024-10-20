import handleLogin from '../services/login.service.js';

function login() {
  document.querySelector('.btn-login').addEventListener('click', () => {
    handleLogin();
  });
}

export default login;
