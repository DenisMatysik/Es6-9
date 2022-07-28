// Array destructuring
// ---------------

//const people = ['Jack', 'Max', 'Leo'];

// let jack = people[0];
// let max = people[1];
// let leo = people[2];

// let [jack, max, leo] = ['Jack', 'Max', 'Leo'];

// console.log(jack, max, leo);

// const rate = [1,50,100, [1000, 2000]];

// let [low, middle, high, [higher, sup]] = rate;

// console.log(low, middle, high, higher, sup);

// function calculate([a, b]) {
//   return [a, b];
// }

// let [a, b] = calculate([1, 10]);
// console.log(a, b);

// // Object destructuring
// // ---------------
let person = {
  name: "Jack",
  age: 20,
  address: {
    city: "Minsk",
  },
};

// let { name = "Max", age = 20 } = person;
// // console.log(name, age);
// let { name: personName, age: personAge } = person;
// console.log(personName, personAge);

//let { address: { city = 'Brest' } } = person;
//console.log(city);

function getData({ name, age }) {
  // console.log(name, age);
  return { name, age };
}

let { name, age } = getData(person);
console.log(name, age);
