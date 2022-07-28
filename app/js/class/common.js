// Class
// ---------------

// class Task {
//   constructor(title = Task.getDefaultTitle(), isCompleted = false) {
//     (this.title = title),
//       (this._isCompleted = isCompleted),
//       (Task.counter += 1);
//   }

//   static getDefaultTitle() {
//     return "Title text";
//   }

//   completed() {
//     this.isCompleted = true;
//   }

//   get isCompleted() {
//     return this._isCompleted === true
//       ? "task is completed"
//       : "task is not completed";
//   }
// }

// Task.counter = 0;

// let task = new Task("Learn ES6", false);

// console.log(task.isCompleted, task._isCompleted);

// Inheritance
// ---------------

class Task {
  constructor(title = "") {
    (this.title = title), (this.isCompleted = false);
  }
  completed() {
    this.isCompleted = true;
  }
}
class SubTask extends Task {
  constructor(title) {
    super(title);
  }
  completed() {
    super.completed();
    console.log(`task ${this.title} is completed!`);
  }
}

let task = new Task("Learn ReactJS");
let subTask = new SubTask("Learn ES6");

task.completed();
subTask.completed();

console.log(task);
console.log(subTask);

//class declaration
class Task {}

//class expression
let Task = class Task {};
