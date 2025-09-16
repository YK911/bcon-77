/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

// const username = 'Jacob Mercer';
// const res1 = username.slice(0, 7);
// console.log('🚀 ~ res1:', res1);

const productNameDB = 'headphone';

// console.log('🚀 ~ productNameDB:', productNameDB);

// chaining
// const firstLetter = productNameDB.slice(0, 1);
const firstLetterToUpperCase = productNameDB.slice(0, 1).toUpperCase();
// console.log('🚀 ~ firstLetter:', firstLetterToUpperCase);
const restString = productNameDB.slice(1);
// console.log('🚀 ~ restString:', restString);

const normalizedProductName = firstLetterToUpperCase + restString;
// console.log('🚀 ~ normalizedProductName:', normalizedProductName);

// Незмінність рядків
// productNameDB[0] = 'H';
// console.log(productNameDB[0]);

// cardTitle.textContent = normalizedProductName;
cardTitle.textContent = capitalizeString(productNameDB);

function capitalizeString(string) {
  if (typeof string !== 'string') {
    console.log(`Type of ${string} is not a string`);

    return;
  }

  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function normalizeUserInput(event) {
  const input = event.target;

  if (input.value.trim().length === 0) {
    return;
  }

  const normalizeInputValue = input.value.toLowerCase().trim();
  // console.log('🚀 ~ normalizeInputValue:', normalizeInputValue);
}

formControlInput.onchange = normalizeUserInput;

const username = 'Mr. Jacob Mercer';

const res2 = username.includes('M');
console.log('🚀 ~ res2:', res2);
const res3 = username.startsWith('Mr.', 5);
console.log('🚀 ~ res3:', res3);
const res4 = username.endsWith('er');
console.log('🚀 ~ res4:', res4);

const userLocation = window.location.href;
const isHTML = userLocation.endsWith('.html');
console.log('🚀 ~ isHTML:', isHTML);

const htmlIndex = userLocation.indexOf('.xml');
console.log('🚀 ~ htmlIndex:', htmlIndex);

if (htmlIndex === -1) {
  console.log('Not html');
} else {
  const endsWithHTML = userLocation.slice(htmlIndex);
  console.log('🚀 ~ endsWithHTML:', endsWithHTML);
}
