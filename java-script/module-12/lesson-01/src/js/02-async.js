import axios from "axios";
import "../common.css";

/**
 * Синтаксис async/await
 * try...catch
 */

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// const fetchTodos = () => {
//   return axios.get(BASE_URL).then((response) => {
//     return response.data;
//   });
// };

const fetchTodos = async () => {
  try {
    const response = await axios.get(BASE_URL);
    // Promise.resolve(undefined)
    return response.data;
  } catch (error) {
    throw error;
  }
};

// const result = await fetchTodos();
// console.log("🚀 ~ result:", result);
// fetchTodos()
//   .then((todos) => {
//     console.log("Todos:", todos);
//   })
//   .catch((error) => {
//     // console.log(error);
//     console.error("Помилка отримання Todos:", error.message);
//   });

//* Function declaration
async function fetchData(params) {}

//* Function expression
const fetchInfo = async function () {};

//* Function expression | arrow fn
const fetchCats = async () => {};

//* Object method
const user = {
  async fetchFriends() {},
};

//* Class method
class User {
  async uploadAvatar() {}
}

// form.addEventListener("submit", async () => {});

// const authUser = () => {
//   return axios.get("https://my-site.com/token");
// };

// const fetchUserData = () => {
//   authUser()
//     .then((token) => {
//       return axios.get(`https://my-site.com/user-data?api-key=${token}`);
//     })
//     .then((response) => {});
// };

// Paralell fetch
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";

// Total exec.time = 163 ms
const fetchUsers = async () => {
  const user1 = await axios.get("/1");
  const user2 = await axios.get("/2");
  const user3 = await axios.get("/3");

  console.log(user1);
  console.log(user2);
  console.log(user3);
};

// fetchUsers();

const paralellFetchUsers = async () => {
  const usersId = [1, 2, 3];

  const promisesArray = usersId.map(async (id) => {
    const { data } = await axios.get(`/${id}`);
    return data;
  });

  const users = await Promise.all(promisesArray);
  console.log("🚀 ~ paralellFetchUsers ~ users:", users);
};

// paralellFetchUsers();
