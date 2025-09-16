/**
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = '/portfolio';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);

// console.log(linkEl.classList);
linkEl.classList.add('active');

const contactLinkEl = document.querySelector(
  `.site-nav__link[href="/contact"]`
);

contactLinkEl.classList.remove('link');

const navEl = document.querySelector('.site-nav');
navEl.classList.toggle('main-nav'); // add class
navEl.classList.toggle('site-nav'); // remove class

// ================================
const refs = {
  input: document.querySelector('.js-agreement'),
  btn: document.querySelector('.js-btn'),
};

refs.input.onchange = toggleUserAgreement;

const isAgree = refs.input.checked;
if (!isAgree) {
  refs.btn.classList.toggle('disabled');
}

function toggleUserAgreement() {
  refs.btn.classList.toggle('disabled');
}

// ================================
const socialsRefs = {
  inputs: document.querySelectorAll('input[name="socials"]'),
  output: document.querySelector('.js-container'),
};

socialsRefs.inputs.forEach(input => {
  input.onchange = () => {
    const currentValue = input.value;

    if (currentValue === 'instagram') {
      socialsRefs.output.classList.replace('facebook', 'instagram');
    }

    if (currentValue === 'facebook') {
      socialsRefs.output.classList.replace('instagram', 'facebook');
    }
  };
});

const iconEl = socialsRefs.output.children[0].children[1];
console.log('🚀 ~ iconEl:', iconEl);
const hasFacebookClass = iconEl.classList.contains('bi-facebook');
console.log('🚀 ~ hasBiClass:', hasBiClass);
