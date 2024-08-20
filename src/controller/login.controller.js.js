import login_api from '../services/login.service';

const handleLogin = async () => {
  const email = document.querySelector('.input-email').value;
  const pass = document.querySelector('.input-password').value;

  console.log(email,pass);
  try {
    const res = await login_api({ email, pass });
     console.log(res);
    if (res.status === 200) {
      history.pushState(null, '', '/home');
    } else {
      console.log('Login failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed');
  }
};

export default handleLogin;
