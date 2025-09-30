// /**
//  * Типізація промісів
//  */

// /***************** 1 *****************/
// const getData = (): Promise<string> => {
const getData = () => {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve("Hello, TypeScript!"), 1000);
  });
};

// getData().then(result => console.log(result)); // "Hello, TypeScript!"

// /***************** 2 *****************/
interface User {
  id: number;
  name: string;
}

// const getUser = (): Promise<User> => {
const getUser = () => {
  return new Promise<User>(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
};

// getUser().then(user => console.log(user.name)); // "Alice"

// /***************** 3 *****************/
interface Client {
  id: number;
  name: string;
}

const getClients = (): Promise<Client[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    }, 1000);
  });
};

getClients().then(users => console.log(users[0].name)); // "Alice"
