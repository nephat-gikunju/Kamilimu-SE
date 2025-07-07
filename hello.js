const prompt = require('prompt-sync')();
let order = prompt("Welcome! Coffee or tea?").toLowerCase();
if (order === "coffee") {
  let type = prompt("Milk or black?").toLowerCase();
  if (type === "milk") {
    console.log("Coffee with milk coming up!");
  } else if (type === "black") {
    console.log("Black coffee on the way!");
  } else {
    console.log("Sorry, unknown coffee type.");
  }
} else if (order === "tea") {
  let type = prompt("Green or herbal?").toLowerCase();
  if (type === "green") {
    console.log("Green tea it is!");
  } else if (type === "herbal") {
    console.log("Herbal tea for relaxation!");
  } else {
    console.log("That tea is not available.");
  }
} else {
  console.log("We only serve coffee or tea.");
}