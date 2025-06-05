document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submission

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // Validation checks
  if (name === '') {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Please enter your email.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Please enter your message.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
  }
});
