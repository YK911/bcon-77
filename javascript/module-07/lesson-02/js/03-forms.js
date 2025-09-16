/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */
const linkEl = document.querySelector('[href="index.html"]');
const form = document.querySelector('.js-form');

form.addEventListener('submit', handleFormDataSubmit);

function handleFormDataSubmit(event) {
  event.preventDefault();

  const formEl = event.target;

  const formData = new FormData(formEl);
  const data = {};

  for (const [key, value] of formData) {
    data[key] = value;
    // console.log(`${key} : ${value}`);
  }

  console.log(data);
}

// form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  // console.log('Cancel default form submit ');

  const formEl = event.target;
  // console.log(formEl.elements);

  const passEl = formEl.elements.password;
  const emailEl = formEl.elements.email;
  const commentEl = formEl.elements.comment;

  // console.log('🚀 ~ handleFormSubmit ~ emailEl:', emailEl.value);
  // console.log('🚀 ~ handleFormSubmit ~ passEl:', passEl.value);
  // console.log('🚀 ~ handleFormSubmit ~ commentEl:', commentEl.value);

  const formData = {
    email: emailEl.value,
    password: passEl.value,
    comment: commentEl.value,
  };

  // console.log(formData);

  formEl.reset();
}

// linkEl.addEventListener('click', handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();
  console.log('Cancel default event');
}
