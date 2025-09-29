/**
 * - Union
 * - Літеральні типи ( )
 */

/***************** 1 *****************/
let userId: number | string;
userId = 10;

userId = "Max";

function greetUser(user: number | string) {
  if (typeof user === "number") {
    console.log(`Hello user with id ${user}`);
  }

  if (typeof user === "string") {
    console.log(`Hello ${user}`);
  }
}

// greetUser(1);
// greetUser("Max");
//! greetUser({ name: "Max", id: 1 });

// "pending", "shipped", "delivered", "canceled"
let status: "pending" | "shipped" | "delivered" | "canceled";

status = "pending";

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: "drone" | "courier" | "pickup";
  deliveryTime: "morning" | "afternoon" | "evening";
}

const order1: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
};

// const order2: Order = {
//   username: "Mercer",
//   email: "j.mercer@mail.com",
//   total: 80,
//   delivery: "delivered",
//   deliveryTime: "tomorrow",
// };
/***************** 3 *****************/
type Car = {
  wheels: number;
  engine: string;
};

type Boat = {
  sails: number;
  engine: string;
};

type Amphibia = Car & Boat;

const myCar: Car = {
  wheels: 4,
  engine: "v4",
};

const myBoat: Boat = {
  sails: 2,
  engine: "yamaha",
};

const superVehicle: Amphibia = {
  wheels: 4,
  sails: 1,
  engine: "v8",
};

type Employee = {
  salary: number;
  position: string;
  department?: string;
};

type Manager = Employee & {
  teamSize: number;
};

type Boss = Manager & {
  teamsQuantity: number;
};

const employee: Employee = {
  salary: 10_000,
  position: "cleaner",
};

const salesManager: Manager = {
  salary: 50_000,
  position: "Team Lead Manager",
  department: "Sales",
  teamSize: 10,
};

const bigBoss: Boss = {
  salary: 100_000,
  position: "boss",
  teamSize: 1,
  teamsQuantity: 10,
};
