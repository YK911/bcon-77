/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userNameEl = document.querySelector('.js-user-name');

// userNameEl.addEventListener('input', handleUserNameInput);
// userNameEl.addEventListener('blur', handleUserNameBlur);
// userNameEl.addEventListener('focus', handleUserNameFocus);

function handleUserNameInput(event) {
  const inputEl = event.target;
  // console.log('🚀  ~ inputEl:', inputEl.value);
}

function handleUserNameBlur(event) {
  const inputValue = event.target.value;
  console.log('🚀  ~ inputValue:', inputValue);
}

function handleUserNameFocus(event) {
  console.log('Focus event');
}

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

const onInputBlur = event => {
  const userName = event.target.value.trim();

  if (userName !== '') {
    alert(`Welcome onboard, ${userName}`);
  }

  event.target.value = '';
};

userNameEl.addEventListener('blur', onInputBlur);
