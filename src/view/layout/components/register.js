const registerPage = () => {
  return `
     <div class="register-container">
            <p class="close-button">X</p>
            <h1>Register</h1>
            <form id="registerForm">
                <input type="email" id="email" placeholder="Email" required>
                <input type="password" id="password" placeholder="Password" required>
                <input type="text" id="full-name" placeholder="full name" required>
                <button class ="submit-register" type="submit">Register</button>
            </form>
            <div id="errorMessage" class="error-message"></div>
            <div class="footer">Already have an account? <a href="/login">Log in</a></div>
        </div>
        `;
};

export default registerPage;
