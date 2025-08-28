/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const sectionEl = document.querySelector('.hero');
// console.log('🚀 ~ sectionEl:', sectionEl.attributes);
// console.log('🚀 ~ sectionEl:', sectionEl);

const imageEl = document.querySelector('.hero__image');

// console.log(imageEl.src);

// setTimeout(() => {
//   imageEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// }, 2000);

const heroTitleEl = document.querySelector('.hero__title');

// console.log(heroTitleEl.textContent);
// setTimeout(() => {
//   heroTitleEl.textContent = 'Very cute cat';
// }, 2000);

const heroTitleText = heroTitleEl.textContent;
const words = heroTitleText.split(' ');

let lastWord = words[1];
const firtsCapitalizeLetter = lastWord[0].toUpperCase();
lastWord = firtsCapitalizeLetter + lastWord.slice(1);

words[1] = lastWord;

heroTitleEl.textContent = words.join(' ');

// console.log('🚀 ~ heroTitleText:', heroTitleText);
// const idx = heroTitleText.indexOf('m');
// console.log('🚀 ~ idx:', idx);
// if (idx !== -1) {
//   const upperCaseLetter = heroTitleText[idx].toUpperCase();
//   const startContent = heroTitleText.slice(0, idx);
//   const endContent = heroTitleText.slice(idx + 1);

//   const res = startContent + upperCaseLetter + endContent;
//   console.log('🚀 ~ res:', res);
//   heroTitleEl.textContent = res;
// }

/**
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const TYPES = {
  text: 'text',
  password: 'password',
};

const inputEl = document.querySelector('.js-input');
const typeSwitcherBtn = document.querySelector('.js-type-switcher');
const attrValue = inputEl.getAttribute('value');
// console.log('🚀 ~ attr:', attrValue);
const attrType = inputEl.getAttribute('type');
// console.log('🚀 ~ attrType:', attrType);

// inputEl.setAttribute('type', 'password');

typeSwitcherBtn.onclick = switchInputType;

typeSwitcherBtn.removeAttribute('id');
const hasClass = typeSwitcherBtn.hasAttribute('class');
// console.log('🚀 ~ hasClass:', hasClass);
const hasType = typeSwitcherBtn.hasAttribute('type');
// console.log('🚀 ~ hasType:', hasType);

if (hasType) {
  const typeAttr = typeSwitcherBtn.getAttribute('type');
  // console.log('🚀 ~ typeAttr:', typeAttr);
}

function switchInputType() {
  const attrType = inputEl.getAttribute('type');

  if (attrType === TYPES.text) {
    inputEl.setAttribute('type', TYPES.password);
    typeSwitcherBtn.textContent = 'show pass';
  } else {
    inputEl.setAttribute('type', TYPES.text);
    typeSwitcherBtn.textContent = 'hide pass';
  }
}
/**
 * Data-атрибути
 */
const output = document.querySelector('.js-output');
const actionsEl = document.querySelectorAll('.actions button');
// actionsEl.forEach(actionEl => {
//   const keys = Object.keys(actionEl.dataset);
//   console.log('🚀 ~ keys:', keys);
//   const values = Object.values(actionEl.dataset);
//   console.log('🚀 ~ values:', values);
// });
actionsEl.forEach(elem => {
  elem.onclick = () => {
    // console.log(elem.dataset.action);
    const actionType = elem.dataset.action;

    switch (actionType) {
      case 'add':
        // output.textContent = actionType[0].toUpperCase() + actionType.slice(1);
        output.textContent = elem.dataset.value;
        break;

      case 'remove':
        // output.textContent = actionType[0].toUpperCase() + actionType.slice(1);
        output.textContent = elem.dataset.value;
        break;

      case 'edit':
        // output.textContent = actionType[0].toUpperCase() + actionType.slice(1);
        output.textContent = elem.dataset.value;
        break;

      default:
        break;
    }
  };
});
