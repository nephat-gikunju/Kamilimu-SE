const dynamicStudents = [];
let input = '';

console.log("\nEnter student names. Type 'done' when finished.");

// Loop until the user types 'done'
while (input.toLowerCase() !== 'done') {
  input = prompt("Enter student name:"); // prompt() for user input

  if (input !== null && input.toLowerCase() !== 'done') { // Check for null (user cancelled) and "done"
    dynamicStudents.push(input);
  }
}

console.log("\nFinal Student List:");
if (dynamicStudents.length === 0) {
    console.log("No students entered.");
} else {
    for (const student of dynamicStudents) {
      // You can reuse your shouldWelcomeStudent function here
      if (shouldWelcomeStudentMultiPart(student)) { // Using the multi-part function from above
        console.log(`- Welcome, ${student}!`);
      } else {
        console.log(`- Hello, ${student}. (Not matching criteria)`);
      }
    }
}