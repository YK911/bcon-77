export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error.message);
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}

// export default class LocalStore {
//   static load = key => {
//     try {
//       return JSON.parse(localStorage.getItem(key));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   static save = (key, value) => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }
