/* Logos slider script */
var swiper = new Swiper('.partners-swiper', {
  a11y: false,
  freeMode: true,
  slidesPerView: 'auto',
});

$(document).ready(function () {
  $('#state').select2({
    placeholder: 'Search...',
  });
});

/* Form validation script */

// document.querySelectorAll('input').forEach((input) => {
//   input.addEventListener('focus', () => {
//     if (input.parentElement.classList.contains('error')) {
//       input.parentElement.classList.remove('error');
//     }
//   });
// });

// document.querySelectorAll('.input-group').forEach((input) => {
//   input.addEventListener('click', () => {
//     if (input.classList.contains('error')) {
//       input.classList.remove('error');
//     }
//   });
// });

const form = document.getElementById('quoteForm');
const dob = document.querySelector('#dob');
const radioGroups = document.querySelectorAll('.radio-group');
const textInputs = document.querySelectorAll("input[type='text']");
const numberInputs = document.querySelectorAll("input[type='number']");
const state = document.getElementById('state');

// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateInputs()) {
    e.preventDefault();
    document.querySelector('.input-group.error').scrollIntoView('true');
  }
});

function validateInputs() {
  let success = true;

  textInputs.forEach((input) => {
    if (input.value.trim()) {
      setSuccess(input);
    } else {
      setError(input);
    }
  });

  numberInputs.forEach((input) => {
    if (input.value.trim()) {
      setSuccess(input);
    } else {
      setError(input);
    }
  });

  radioGroups.forEach((group) => {
    const inputs = group.querySelectorAll('input');
    if (inputs[0].checked || inputs[1].checked) {
      setSuccess(genderGroup);
    } else {
      success = false;
      setError(group.firstChild, 'Please select an option');
    }
  });

  if (!state.value) {
    success = false;
    setError(state, 'Please select a value');
  } else setSuccess(state);

  const dobVal = dob.value.trim();
  const dateVal = new Date(dobVal).getFullYear();
  const currentYear = new Date().getFullYear() - 69;
  if (dobVal === '') {
    success = false;
    setError(dob, 'Date of Birth is required');
  } else if (dateVal < currentYear) {
    success = false;
    setError(dob, 'They must be younger then 70');
  } else if (dateVal >= currentYear + 69) {
    success = false;
    setError(dob, 'Please enter a valid date of birth');
  } else {
    setSuccess(dob);
  }

  console.log(document.getElementById('state').value);

  // if (emailVal === '') {
  //   success = false;
  //   setError(email, 'Email is required');
  // } else if (!validateEmail(emailVal)) {
  //   success = false;
  //   setError(email, 'Please enter a valid email');
  // } else {
  //   setSuccess(email);
  // }

  // if (passwordVal === '') {
  //   success = false;
  //   setError(password, 'Password is required');
  // } else if (passwordVal.length < 8) {
  //   success = false;
  //   setError(password, 'Password must be atleast 8 characters long');
  // } else {
  //   setSuccess(password);
  // }

  // if (cpasswordVal === '') {
  //   success = false;
  //   setError(cpassword, 'Confirm password is required');
  // } else if (cpasswordVal !== passwordVal) {
  //   success = false;
  //   setError(cpassword, 'Password does not match');
  // } else {
  //   setSuccess(cpassword);
  // }

  return success;
}
function setError(element, message = '') {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  if (errorElement && !errorElement.innerText) {
    errorElement.innerText = errorElement.innerText + message;
  }
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  if (errorElement) {
    errorElement.innerText = '';
  }
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');
}

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
// };

/* Date of Birth */
(() => {
  const birthdate = document.getElementById('dob');
  const min = new Date();
  const max = new Date();
  //69 is the maximum age limit
  min.setFullYear(min.getFullYear() - 69);
  //Minimum date of birth limit is today
  max.setFullYear(max.getFullYear() - 0);
  birthdate.setAttribute('min', '' + min.getFullYear());
  birthdate.setAttribute('max', '' + max.getFullYear());
})();
