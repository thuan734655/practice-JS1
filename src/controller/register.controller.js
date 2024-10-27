import handleRegister from '../services/register.service';

const registerController = () => {
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.section-main-register').innerHTML = '';
  });
  document.querySelector('.submit-register').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const fullname = document.querySelector('#full-name').value;
    console.log(fullname);
    handleRegister(email, password, fullname);
  });
};
export default registerController;
