/**
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три варіанта підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = 'vip';
let message;

const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Користувач має доступ до контента?', canAccessContent);

// console.log(
//   'Користувач має доступ до контента?',
//   sub === 'pro' || sub === 'vip'
// );

if (sub === 'pro' || sub === 'vip') {
  message = `Користувач має доступ до контента? true`;
} else {
  message = `Користувач має доступ до контента? false`;
}

// console.log(message);

/**
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDenied = false;

const canOpenChat = isOnline && isFriend && !isDenied;
// console.log('Можна відкрити чат? ', canOpenChat);
