// Function to enable/disable the edit profile button
document.getElementById('editProfileBtn').addEventListener('click', function () {
    const inputs = document.querySelectorAll('#profileForm input');
    inputs.forEach(input => {
      input.disabled = !input.disabled;
    });
    this.textContent = this.textContent === 'Edit Profile' ? 'Save Changes' : 'Edit Profile';
  });
  
  // Login form validation
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let isValid = true;
  
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    // Email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }
  
    // Password validation
    if (!password.value) {
      password.classList.add('is-invalid');
      isValid = false;
    } else {
      password.classList.remove('is-invalid');
    }
  
    if (isValid) {
      alert('Login successful');
    }
  });
  
  // Registration form validation
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let isValid = true;
  
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    // Full name validation
    if (!fullName.value) {
      fullName.classList.add('is-invalid');
      isValid = false;
    } else {
      fullName.classList.remove('is-invalid');
    }
  
    // Email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }
  
    // Password validation
    if (!password.value) {
      password.classList.add('is-invalid');
      isValid = false;
    } else {
      password.classList.remove('is-invalid');
    }
  
    if (isValid) {
      alert('Registration successful');
    }
  });
  