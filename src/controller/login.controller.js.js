import handleLogin from '../services/login.service.js';

function login() {
  document.querySelector('.btn-login').addEventListener('click', () => {
    const email = document.querySelector('.input-email').value;
    const password = document.querySelector('.input-password').value;
    handleLogin(email, password);
  });
}

export default login;
