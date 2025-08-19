/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  // countTotalTracks: function () {},

  changeName: function (newName) {
    // console.log(playlist.name);
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// console.log(playlist.getTrackCount());
playlist.changeName('New playlist name');

playlist.addTrack('new track 1');
// console.log(playlist.getTrackCount());

playlist.addTrack('new track 2');
// console.log(playlist.getTrackCount());

playlist.updateRating(4);
// console.log(playlist);

// THIS
function showThis(params) {
  // params = undefined
  // arguments = []
  // this = {}
  console.log(this);

  // return undefined
}

showThis();

playlist.show = function (params) {
  // params = undefined
  // arguments = []
  // this = {}
  console.log(this);

  // return undefined
};

playlist.show();

// Втрата контексту === Втрата this
// const changePlaylistName = playlist.changeName;
// changePlaylistName();
