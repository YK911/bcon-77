/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const newPlaylist = Object.create({});
// console.log('🚀 ~ newPlaylist:', newPlaylist);

const playlist = {
  name: 'My favourite playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  isFavourite: true,
  metaInfo: {
    createDate: '01.01.2001',
    createdBy: 'Mango',
    lastUpdates: '02.02.2002',
  },
  shared: [
    { friendName: 'Mango', link: 'qwerty123' },
    { friendName: 'Poly', link: 'qwerty456' },
    { friendName: 'Ajax', link: 'qwerty098' },
  ],
};
// console.log('🚀 ~ playlist', playlist);

const playlistName = playlist.name;
// console.log('🚀 ~ playlistName:', playlistName);

// const playlistRating = playlist.rating;
// console.log('🚀 ~ playlistRating:', playlistRating);

const playlistName1 = playlist.name;
// console.log('🚀 ~ playlistName1:', playlistName1);

const lastUpdates = playlist.metaInfo.lastUpdates;
// console.log('🚀 ~ lastUpdates:', lastUpdates);

const sharedToAjax = playlist.shared[2].friendName;
// console.log('🚀 ~ sharedToAjax:', sharedToAjax);

// const playlistRating = playlist['rating'];
// console.log('🚀 ~ playlistRating:', playlistRating);

// const playlists = [
//   {
//     name: 'My favourite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavourite: true,
//   },
//   {
//     name: 'My favourite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavourite: true,
//   },
//   {
//     name: 'My favourite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavourite: true,
//   },
// ];

/**
 * -----------------------------------
 */
const property = 'tracks';

const dynamicProperty = playlist[property];
// console.log('🚀 ~ dynamicProperty:', `${property} -> ${dynamicProperty}`);

playlist.isFavourite = false;
playlist.provider = 'Apple Music';

// console.log('🚀 ~ playlist after update:', playlist);

/**
 * -----------------------------------
 */
function getUserSettings(storage = {}) {
  console.log(storage);
  console.log(storage.navPosition);
  console.log(storage.theme);
}

// Обʼєкт параметрів
getUserSettings({
  navPosition: 'fixed',
  contentSize: 'fluid',
  theme: 'dark',
});

getUserSettings({
  navPosition: 'top',
  contentSize: 'fixed',
  theme: 'auto',
});
