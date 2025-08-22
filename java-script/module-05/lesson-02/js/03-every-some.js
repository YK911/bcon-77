const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 580, points: 48, online: true },
];
console.table(players);

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */
const isAllOnline = players.every((player, idx, arr) => {
  return player.online;
});
console.log('isAllOnline: ', isAllOnline);

const isFirstLevelPlayers = players.every(player => {
  if (!player.online) {
    return player.points > 40;
  }
  return player.online && player.timePlayed > 100;
});
// console.log('🚀 ~ isFirstLevelPlayers:', isFirstLevelPlayers);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
const isAnyOnline = players.some((player, idx) => {
  // console.log(idx + 1);

  return player.online;
});
// console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => {
  return player.timePlayed > 450;
});
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);

if (anyHardcorePlayers) {
  const hardcorePlayers = players.filter(player => {
    return player.timePlayed > 450;
  });

  // console.log(hardcorePlayers);
}
