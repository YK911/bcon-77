/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /
 * Якщо ні, додай до кінця значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about';
// console.log(link);

const hasEndSlash = !link.endsWith('/');

if (hasEndSlash) {
  link += '/';
}

// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної url символом /
 * Якщо ні, додай до кінця значення url цей символ,
 * але тільки в тому випадку, якщо в url є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = 'https://somesite.com/about';
console.log(url);

const isFormatedUrl = !url.endsWith('/') && url.includes('my-site');

if (isFormatedUrl) {
  url += '/';
}

console.log(url);

/**
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

const normalizedString1 = string1.toLowerCase();
console.log('🚀 ~ normalizedString1:', normalizedString1);
const hasSpam = normalizedString1.includes(blacklistedWord1);
const hasSale = normalizedString1.includes(blacklistedWord2);
console.log('🚀 ~ hasSpam:', hasSpam);
console.log('🚀 ~ hasSale:', hasSale);

if (hasSpam || hasSale) {
  console.log('Marked as spam');
}

function checkSpam(string, spam = 'spam', sale = 'sale') {
  const normalizedString = string.toLowerCase();
  const isSpam =
    normalizedString.includes(spam) || normalizedString.includes(sale);

  if (isSpam) {
    return 'Input string has spam words';
  }

  return 'Everything ok';
}

const spam1 = checkSpam(string1);
console.log('🚀 ~ spam1:', spam1);
const spam2 = checkSpam(string2);
console.log('🚀 ~ spam2:', spam2);
const spam3 = checkSpam(string3);
console.log('🚀 ~ spam3:', spam3);
