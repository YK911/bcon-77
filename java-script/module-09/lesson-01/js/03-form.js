const LS_KEY = 'account_data';
const formMeta = {};

const formEl = document.querySelector('.js-account-form');
formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', handleFormInput);
populateForm();

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  console.log('Send data');

  localStorage.removeItem(LS_KEY);
  form.reset();
}

function handleFormInput(event) {
  const form = event.currentTarget;
  const formData = new FormData(form);

  for (const [key, value] of formData) {
    formMeta[key] = value;
  }
  formMeta.userAgreement = Boolean(formData.get('userAgreement'));

  localStorage.setItem(LS_KEY, JSON.stringify(formMeta));
}

function populateForm() {
  const dataFromLS = localStorage.getItem(LS_KEY);

  if (!dataFromLS) {
    return;
  }

  const data = JSON.parse(dataFromLS);

  const keys = Object.keys(data);
  for (const key of keys) {
    if (formEl.elements[key].type === 'checkbox') {
      formEl.elements[key].checked = data[key];
    }
    formEl.elements[key].value = data[key];
  }
}
