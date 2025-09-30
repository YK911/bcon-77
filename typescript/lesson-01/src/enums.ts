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
