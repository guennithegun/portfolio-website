(function() {
  // VARIABLES
  var $form = document.querySelector('#contact-form');
  var $emailInput = document.querySelector('#email');
  var $phoneInput = document.querySelector('#telephone');
  var $messageInput = document.querySelector('#message');

  // FUNCTIONS
  function validateEmail() {    // validates input in email form
    var value = $emailInput.value;

    if (!value) {
      showErrorMessage($emailInput, 'Email is a required field.');

      return false;
    }

    if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
      showErrorMessage($emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage($emailInput, null);

    return true;
  }

  function validatePhone() {    // validates input in phone form
    var value = $phoneInput.value;

    if (/\D/.test(value)) {
      showErrorMessage($phoneInput, 'You must enter a valid Phonenumber');
      return false;
    }

    showErrorMessage($phoneInput, null);

    return true;
  }

  function validateMessage() {    // validates input in message form
    var value = $messageInput.value;

    if (!value) {
      showErrorMessage($messageInput, 'Message is a required field.');
      return false;
    }

    showErrorMessage($messageInput, null);

    return true;
  }

  function showErrorMessage($input, message) {
    var $container = $input.parentElement;
    var error = $container.querySelector('.error-message');

    if (error) {
      $container.removeChild(error);
    }

    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      $container.appendChild(error);
    }
  }

  function validateForm() {
    var isValidEmail = validateEmail();
    var isValidPhone = validatePhone();
    var isValidMessage = validateMessage();
    return isValidEmail && isValidPhone && isValidMessage;
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })

  $emailInput.addEventListener('input', validateEmail);
  $phoneInput.addEventListener('input', validatePhone);
  $messageInput.addEventListener('input', validateMessage);
})();
