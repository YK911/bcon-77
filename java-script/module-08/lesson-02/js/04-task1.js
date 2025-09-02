/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 */

const user = {
  id: 1,
  username: 'harry_potter',
  avatarPath:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Freplit%2Fimages%2F1679529054017_7d49e8b1b64d32d877c2587a7c531e3d.png&f=1&nofb=1&ipt=dbff5469814ab763d0918919510ac76d27c29fe9881b7c9dba6c66451e3d52af',
  profile: {
    name: 'Harry',
    surname: 'Potter',
    age: 25,
  },
};

// Деструктуризація об'єкта для отримання окремих змінних
const {
  username,
  avatar = 'https://avatar.iran.liara.run/public/7',
  profile: { name, surname },
} = user;

// Виведення отриманих значень
console.log(`Ім'я користувача: ${name}`);
console.log(`Прізвище користувача: ${surname}`);
console.log(`Ім'я користувача (за нікнеймом): ${username}`);
console.log(`Ім'я користувача (за нікнеймом): ${avatar}`);

const userInfoEl = document.querySelector('.js-user-info');

userInfoEl.insertAdjacentHTML('beforeend', createUserProfile(user));

function createUserProfile({
  username,
  avatarPath = 'https://avatar.iran.liara.run/public/7',
  profile: { name, surname },
} = {}) {
  return `<div class="card">
    <img class="w-75 h-75 rounded mx-auto d-block" src="${avatarPath}"  alt="${name} ${surname}"/>
    <div class="card-body">
      <h3>${name} ${surname}</h3>
      <p class="card-text">${username}</p>
    </div>
  </div>`;
}
