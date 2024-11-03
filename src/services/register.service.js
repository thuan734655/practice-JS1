import axiosClient from './axiosClient.js';

const handleRegister = async (email, password, fullname) => {
  const reqBody = { email: email, password: password, fullname: fullname };
  try {
    const res = await axiosClient.post('/register', reqBody, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Login failed due to a network error or request failure');
  }
};

export default handleRegister;
