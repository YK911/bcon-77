/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */
interface Location {
  code: number;
  city: string;
  street: string;
  building: number;
}

interface User {
  readonly id: number;
  username: string;
  email: string;
  isOnline: boolean;
  age: number;
  location?: Location;
}

const jacob: User = {
  id: 1,
  username: "Jacob",
  email: "j.mercer@mail.com",
  isOnline: false,
  age: 30,
  location: {
    code: 12345,
    city: "Lviv",
    street: "Shevchanko",
    building: 12,
  },
};
console.log("🚀 ~ jacob:", jacob);
//! jacob.id = 10; // readonly error

const poly: User = {
  id: 2,
  username: "Poly",
  email: "p.makko@mail.com",
  isOnline: true,
  age: 20,
};

// poly.age = "16";
console.log(poly);
