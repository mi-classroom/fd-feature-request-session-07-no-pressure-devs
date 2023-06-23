// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
  const checkbox = document.getElementById('data');
  const checkboxLabel = document.querySelector('label[for="data"]');

  // Add event listener for form submit event
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(function (input) {
      // Check if the input value is less than 3 characters
      if (input.value.trim().length < 3) {
        input.classList.add('invalid');
        isValid = false;
      } else {
        input.classList.remove('invalid');
      }
    });

    // Check if the checkbox is not checked
    if (!checkbox.checked) {
      checkboxLabel.classList.add('invalid-label');
    } else {
      checkboxLabel.classList.remove('invalid-label');
    }

    // Check if all inputs are valid and the checkbox is checked
    if (isValid && checkbox.checked) {
      form.submit();
    }
  });

  // Add event listener for form reset event
  form.addEventListener('reset', function () {
    inputs.forEach(function (input) {
      input.classList.remove('invalid');
    });

    checkboxLabel.classList.remove('invalid-label');
  });
});
