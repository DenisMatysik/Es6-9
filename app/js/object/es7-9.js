// .entries() for Object:
// const name = ["Y", "a", "u", "h", "e", "n"];
// Object.entries(name); // [ [ '0', 'Y' ], [ '1', 'a' ], [ '2', 'u' ], [ '3', 'h' ], [ '4', 'e' ], [ '5', 'n' ] ];

// const admin = {
//   [Symbol("password")]: "123pass",
//   name: "Yauhen",
// };
// Object.entries(admin); // [ [ 'name', 'Yauhen' ] ];

// const arr = [
//   ["one", 1],
//   ["two", 2],
//   ["three", 3],
// ];
// Object.fromEntries(arr); // { one: 1, two: 2, three: 3 }

// const user = {
//   firstName: "Yauhen",
//   lastName: "Kavalchuk",
// };
// Object.values(user); // [ "Yauhen", "Kavalchuk" ] ];

// getOwnPropertyDescriptors()
// Base object with properties, get and set:
const person = {
  name: "Max",
  age: 30,
  set personName(name) {
    this.name = name;
  },
  get password() {
    return `${this.name}${this.age}`;
  },
};

// console.log(person); // {name: "Max", age: 30}
// console.log(person.password); // "Max30"
// person.personName = "denis";
// console.log(person); // {name: "denis", age: 30}

// Get property descriptors:
// console.log(Object.getOwnPropertyDescriptors(person));
/*
    age: {value: 30, writable: true, enumerable: true, configurable: true}
    name: {value: "Max", writable: true, enumerable: true, configurable: true}
    password: {get: ƒ, set: undefined, enumerable: true, configurable: true}
    personName: {get: undefined, set: ƒ, enumerable: true, configurable: true}
  */

// Clone object:
// Using assign()
// const admin = Object.assign({}, person);
// Using destructuring
// const admin = { ...person };

// console.log(admin); // {name: "Max", age: 30, personName: undefined, password: "Max30"}

// console.log(Object.getOwnPropertyDescriptors(admin));
/*
    age: {value: 30, writable: true, enumerable: true, configurable: true}
    name: {value: "Max", writable: true, enumerable: true, configurable: true}
    password: {value: "Max30", writable: true, enumerable: true, configurable: true}
    personName: {value: undefined, writable: true, enumerable: true, configurable: true}
  */

// Clone object:
// Using .getOwnPropertyDescriptors()
const superAdmin = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(person)
);

console.log(Object.getOwnPropertyDescriptors(superAdmin));
/*
    age: {value: 30, writable: true, enumerable: true, configurable: true}
    name: {value: "Max", writable: true, enumerable: true, configurable: true}
    password: {get: ƒ, set: undefined, enumerable: true, configurable: true}
    personName: {get: undefined, set: ƒ, enumerable: true, configurable: true}
  */
