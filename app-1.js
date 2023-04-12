const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', validateInput);

function validateInput(event) {
  const inputValue = event.target.value;
  const dataLength = event.target.getAttribute('data-length');

  if (inputValue.length === parseInt(dataLength)) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
}