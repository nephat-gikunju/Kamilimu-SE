
// Given Procedural Code:
const radius = 7;

function calculateCircumference(r) {
  return 2 * Math.PI * r;
}

console.log("Procedural Output:");
console.log(calculateCircumference(radius));

// 2A. Rewrite using Object-Oriented Programming (OOP)
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle(7);
console.log("\nOOP Output:");
console.log(myCircle.getCircumference());

const anotherCircle = new Circle(10);
console.log(anotherCircle.getCircumference());


// 2B. Rewrite using Functional Programming

const calculateCircumferencePure = (r) => {
  return 2 * Math.PI * r;
};

const radii = [3, 5, 7];

console.log("\nFunctional Programming Output:");
const circumferences = radii.map(calculateCircumferencePure);
console.log(circumferences); // Expected: array of circumferences


// Part 4A: To-Do List Manager using Object-Oriented Programming (OOP)

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false; 
  }

  markComplete() {
    this.completed = true;
    console.log(`Task "${this.description}" marked as complete.`);
  }

  getStatus() {
    return this.completed ? "[x] " + this.description : "[ ] " + this.description;
  }
}

class ToDoList {
  constructor() {
    this.tasks = []; 
  }

  addTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
    console.log(`Added task: "${description}"`);
    return newTask; 
  }

  markTaskComplete(taskDescription) {
    const taskToComplete = this.tasks.find(task => task.description === taskDescription);
    if (taskToComplete) {
      taskToComplete.markComplete();
    } else {
      console.log(`Task "${taskDescription}" not found.`);
    }
  }

  printPendingTasksCount() {
    const pendingTasks = this.tasks.filter(task => !task.completed);
    console.log(`\nNumber of pending tasks: ${pendingTasks.length}`);
  }

  listAllTasks() {
    console.log("\n--- Current Tasks ---");
    if (this.tasks.length === 0) {
      console.log("No tasks yet!");
    } else {
      this.tasks.forEach(task => {
        console.log(task.getStatus());
      });
    }
    console.log("---------------------");
  }
}
