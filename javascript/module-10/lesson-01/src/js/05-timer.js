import '../common.css';

/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    console.log('🚀~ time:', time);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = currentDate - startTime;
      // console.log(deltaTime);
      const time = this.getTimeComponents(deltaTime);
      console.log('🚀 ~ time:', time);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  /**
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщається годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /**
   * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

const timer = new Timer({
  onTick: updateClockface(clockface),
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

const timer1 = new Timer({
  onTick: updateClockface(document.querySelector('.js-clockface-1')),
});

document
  .querySelector('button[data-action-start="1"]')
  .addEventListener('click', timer1.start.bind(timer1));
document
  .querySelector('button[data-action-stop="1"]')
  .addEventListener('click', timer1.stop.bind(timer1));

/**
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рендерить інтерфейс
 */
// HOF - Higher Order Function
function updateClockface(selector) {
  // console.log(selector);

  return function ({ hours, mins, secs }) {
    selector.textContent = `${hours}:${mins}:${secs}`;
  };
}
