const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.js-feedback-form');
const textarea = form.querySelector('textarea');

populateMessagaField();

/**
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // TODO: Без деструктуризації
  // const nameValue = form.elements.name.value;
  // const msgValue = form.elements.message.value;
  // const formData = {
  //   name: nameValue,
  //   message: msgValue,
  // };
  // console.log(formData);

  // TODO: Деструктуризація
  // const {
  //   name: { value: nameValue },
  //   message: { value: msgValue },
  // } = event.target.elements;
  // console.log('🚀 ~ handleFormSubmit ~ value:', nameValue);
  // console.log('🚀 ~ handleFormSubmit ~ value:', msgValue);

  // ? Обробка даних форми
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData) {
    data[key] = value;
  }

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */
textarea.addEventListener('input', handlerMessage);

function handlerMessage(event) {
  const message = event.target.value;
  // console.log('🚀 ~ handlerMessage:', message);
  localStorage.setItem(STORAGE_KEY, message);
}

/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function populateMessagaField() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
