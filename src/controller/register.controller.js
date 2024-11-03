import validateLoginForm from '../helper/fromValidates.js';
import Router from '../router/Router';
import handleRegister from '../services/register.service';

const registerController = () => {
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.section-main-register').innerHTML = ''; // Clear registration content
  });

  // Handle registration submission
  document
    .querySelector('.submit-register')
    .addEventListener('click', async (e) => {
      e.preventDefault();

      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const fullname = document.querySelector('#full-name').value;

      const validate = validateLoginForm(email, password, fullname);
      if (validate.length > 0) {
        validate.forEach((error) => alert(error));
      } else {
        const res = await handleRegister(email, password, fullname);
        const { success, message } = res;
        console.log(res);
        if (success) {
          alert('Register success');
          Router.navigateTo('/login');
        } else {
          console.log(message);
        }
      }
    });
};

export default registerController;
