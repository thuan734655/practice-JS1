const validateLoginForm = (email, password) => {
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

  return errorMessages;
};

export default validateLoginForm;
