// Modules
// ---------------
// Способы экспорта переменных
export let one = 1;

let two = 2;
const three = 3;
export { two, three };

//Class
export class Person {
  constructor(name) {
    this.name = name;
  }
}
//Function
function sayHello() {
  console.log("hello!");
}
export { sayHello };

// Rename
export { one as once, two as twice };
// переменная one будет экспортированна под именем once

//Import
import { one, two } from "./file.js";

// Rename Import
import { one as num1, two as num2 } from "./file.js";

// Импорт всего в качестве объекта, т.е. все экспортируемые элементы помещаются в переменную numbers
import * as numbers from "./file.js";

// default export
// export default class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

import Person from "./file.js";
