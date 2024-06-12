const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorIcon = document.querySelectorAll('.error-icon');
const eyeIcon = document.getElementById('eye-icon');
const errorText = document.querySelectorAll('.error-text');
const errorSampleText = document.querySelector('.error-sample');

console.log(errorIcon)

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
  } else {
    firstName.classList.remove('error');
  }

  if (fName === '') {
    errorIcon[0].classList.add('error');
  } else {
    errorIcon[0].classList.remove('error')
  }

  if (fName === '') {
    errorText[0].classList.add('error');
  } else {
    errorText[0].classList.remove('error')
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
  } else {
    lastName.classList.remove('error');
  }

  if (lName === '') {
    errorIcon[1].classList.add('error');
  } else {
    errorIcon[1].classList.remove('error')
  }

  if (lName === '') {
    errorText[1].classList.add('error');
  } else {
    errorText[1].classList.remove('error')
  }

  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  if (!validateEmail(emailVal) || emailVal === ''){
    errorIcon[2].classList.add('error');
  } else {
    errorIcon[2].classList.remove('error')
  }

  if (!validateEmail(emailVal) || emailVal === ''){
    errorText[2].classList.add('error');
  } else {
    errorText[2].classList.remove('error')
  }


  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
  } else {
    password.classList.remove('error');
  }
  if (passwordVal === '') {
    errorIcon[3].classList.add('error');
  } else {
    errorIcon[3].classList.remove('error')
  }

  if (passwordVal === '') {
    errorText[3].classList.add('error');
  } else {
    errorText[3].classList.remove('error')
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
