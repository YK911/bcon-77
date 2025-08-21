/**
 * Метод flatMap
 */

const tweets = [
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
    userFriend: [
      ['Poly', 'Ajax'],
      ['Ajax', 'Poly'],
    ],
  },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const tags = [
//   ...tweets[0].tags,
//   ...tweets[1].tags,
//   ...tweets[2].tags,
//   ...tweets[3].tags,
//   ...tweets[4].tags,
// ];

const tags = tweets.flatMap((tweet, idx, arr) => {
  arr[idx].likes = 'Super like';

  return tweet.tags;
});
console.log(tags);
console.table(tweets);
