import '../common.css';

/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
// const notification = document.querySelector('.js-alert');

// showNotification();
// notification.addEventListener('click', onNotificationClick);
/**
 * Функції
 */
function onNotificationClick(event) {
  const paragraphEl = event.target;

  paragraphEl.classList.remove('is-visible');
  clearTimeout(timeoutId);
}

function showNotification() {
  console.log(
    'Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим'
  );
  notification.classList.add('is-visible');
  hideNotification();
}

function hideNotification() {
  timeoutId = setTimeout(() => {
    console.log('Таймаут все ще працює');

    notification.classList.remove('is-visible');
  }, NOTIFICATION_DELAY);
}

/**
 * Bootstrap Toast notofocation
 */

const toastDelay = 3000;
let toastTimeoutId = null;
let toastIntervalId = null;
let deltaTime = toastDelay / 1000;

const refs = {
  btn: document.querySelector('.js-btn'),
  toast: document.querySelector('.js-toast'),
};

refs.btn.addEventListener('click', handleBtnClick);
refs.toast.addEventListener('click', handleToastClick);

function handleBtnClick() {
  const isToastShow = refs.toast.classList.contains('show');
  if (!isToastShow) {
    refs.toast.classList.add('show');
  }

  toastTimeoutId = setTimeout(() => {
    refs.toast.classList.remove('show');
    clearInterval(toastIntervalId);
    refs.toast.querySelector('.js-toast-interval').textContent =
      toastDelay / 1000;
    deltaTime = toastDelay / 1000;
  }, toastDelay);

  updateToastInterval();
}

function handleToastClick(event) {
  const toast = event.currentTarget;
  const btn = event.target.closest('.js-btn-close');
  if (btn === null) {
    return;
  }

  toast.classList.remove('show');
  clearTimeout(toastTimeoutId);
  clearInterval(toastIntervalId);
  refs.toast.querySelector('.js-toast-interval').textContent =
    toastDelay / 1000;
}

function updateToastInterval() {
  toastIntervalId = setInterval(() => {
    const toastIntervalEl = document.querySelector('.js-toast-interval');
    toastIntervalEl.textContent = deltaTime -= 1;
  }, 1000);
}
