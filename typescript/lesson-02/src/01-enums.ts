/**
 * Перелічення (enum)
 *
 * Enum - це список іменованих констант, які можна використовувати як змінні.
 * Union Type - це просто список допустимих значень, які можна присвоювати змінним.
 *
 * Якщо не знаєш, що вибрати - завжди починай з union type.
 * Enum варто використовувати лише тоді, коли є реальна потреба в цьому.
 */

/***************** 1 *****************/
// type Status = "pending" | "fulfilled" | "rejected";
// enum Status {
//   Pending = "pending",
//   Fulfilled = "fulfilled",
//   Rejected = "rejected",
// }

/***************** 2 *****************/
// type Code = 200 | 201 | 400 | 500;

// enum ReqCode {
//   Success = 200,
//   Created = 201,
//   NotFound = 400,
//   ServerError = 500,
// }

let requestCode;

/***************** 3 *****************/
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

interface User {
  username: string;
  role: Role;
}

const user: User = {
  username: "jacob",
  role: Role.Guest,
};
