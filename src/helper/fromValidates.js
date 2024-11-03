const validateLoginForm = (email, password, fullname) => {
  const errorMessages = [];

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errorMessages.push('Email is required.');
  } else if (!emailPattern.test(email.trim())) {
    errorMessages.push('Please enter a valid email address.');
  }

  // Password validation
  if (!password) {
    errorMessages.push('Password is required.');
  } else if (password.trim().length < 6) {
    errorMessages.push('Password must be at least 6 characters long.');
  }

  if (fullname !== undefined) {
    if (!fullname) {
      errorMessages.push('Full name is required.');
    } else if (fullname.trim().length < 2) {
      errorMessages.push('Full name must be at least 2 characters long.');
    }
  }

  return errorMessages;
};

export default validateLoginForm;
