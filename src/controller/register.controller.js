import handleRegister from '../services/register.service';

/** Controller to manage the registration functionality */
const registerController = () => {
  // Close registration section on button click
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.section-main-register').innerHTML = ''; // Clear registration content
  });

  // Handle registration submission
  document.querySelector('.submit-register').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = document.querySelector('#email').value; // Get email input
    const password = document.querySelector('#password').value; // Get password input
    const fullname = document.querySelector('#full-name').value; // Get full name input
    console.log(fullname); // Log full name for debugging purposes
    handleRegister(email, password, fullname); // Call registration service with inputs
  });
};

export default registerController; // Export the controller for use in other modules
