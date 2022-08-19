import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
//
if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  const parseLocalStograde = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  form.elements.email.value = parseLocalStograde.email;
  form.elements.message.value = parseLocalStograde.message;
}
let formInputs = {};
function saveDataForm(e) {
  //
  e.preventDefault();
  //

  formInputs.email = form.elements.email.value;
  formInputs.message = form.elements.message.value;

  //
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInputs));
}

form.addEventListener('input', throttle(saveDataForm, 500));
//
form.addEventListener('submit', formSubmit);
//
function formSubmit(e) {
  e.preventDefault();
  if (form.elements.email.value && form.elements.message.value) {
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    form.reset();
    localStorage.clear();
    formInputs = {};
  } else {
    alert('Заповніть всі поля будь ласка');
  }
}
