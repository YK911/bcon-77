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

// enum Status {
//   Pending = "pending",
//   Fulfilled = "fulfilled",
//   Rejected = "rejected",
// }

// console.log("🚀 ~ Status:", Status["0"]);
// let status: Status = "pending";
// let status: Status = Status.Pending;

// function logStatus(param: Status) {
//   console.log(param);
// }

// logStatus(Status.Pending);
// logStatus(Status.Fulfilled);
// logStatus(Status.Rejected);

// logStatus("pending");
// logStatus("rejected");
// logStatus("fulfilled");
// logStatus("pending");
// logStatus("fulfilled");

// const bodyEl = document.querySelector(".page");
// const bodyEl = document.body;

// type Theme = "light" | "dark" | "auto";

// function switchTheme(theme: Theme) {
//   bodyEl?.classList.toggle(theme);
// }

// switchTheme("auto");

// switchTheme("light");

/***************** 2 *****************/
// type Code = 200 | 201 | 400 | 500;

// enum ReqCode {
//   Success = 200,
//   Created = 201,
//   NotFound = 400,
//   Forbidden = 403,
//   ServerError = 500,
// }
// enum ReqCode {
//   Success = -1.5,
//   Created,
//   NotFound,
//   Forbidden = 403,
//   ServerError,
// }

// let requestCode: ReqCode = ReqCode.Created;
// let requestCode1: ReqCode = ReqCode.Forbidden;
// let reqCode: ReqCode = ReqCode.Success;
// console.log("🚀 ~ reqCode:", reqCode);

// function checkStatus(param: ReqCode) {
//   if (param === ReqCode.ServerError) {
//     console.log("Error from Server");
//   }
// }

// checkStatus(ReqCode.ServerError);

/***************** 3 *****************/
// enum Role {
//   Admin = "admin",
//   User = "user",
//   Guest = "guest",
// }

// interface User {
//   username: string;
//   role: Role;
// }

// const user: User = {
//   username: "jacob",
//   role: Role.Guest,
// };

// const admin = {
//   username: "Mango",
//   role: Role.Admin,
// };

/***************** 4 *****************/

enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednessday = "Wednessday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isDayoff(day: DayOfWeek) {
  switch (day) {
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
      console.log("It's a dayoff");
      break;

    default:
      console.log("It's a work day");
  }
}

isDayoff(DayOfWeek.Saturday);
isDayoff(DayOfWeek.Friday);

// ? String literals
type _DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednessday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function isWorkDay(day: _DayOfWeek) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      console.log("It's a dayoff");
      break;

    default:
      console.log("It's a work day");
  }
}

isWorkDay("Saturday");
