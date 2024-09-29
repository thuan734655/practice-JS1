import login_api from '../services/login.service';

const handleLogin = async () => {
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;

  try {
    const res = await login_api({ email, password });

    if (res && res.status) {
      switch (res.status) {
        case 200:
          console.log('Login successful');
          history.pushState(null, '', '/home');
          break;
        case 400:
          console.log('Invalid email or password');
          break;
        case 401:
          console.log('Unauthorized access');
          break;
        default:
          console.log('Login failed with status:', res.status);
      }
    } else {
      console.log('Invalid response received');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed');
  }
};

export default handleLogin;
