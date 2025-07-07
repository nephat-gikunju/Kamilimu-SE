const students = ["Alice Ate", "Bob", "Charlie", "Dave", "Eve", "Frankie", "anna", "Steve"];
console.log("Student Roll Call:");

for (const student of students) {
  const lowerCaseStudent = student.toLowerCase(); // Convert to lowercase for case-insensitive check

  // Check if starts with 'a' OR ends with 'e'
  if (lowerCaseStudent.startsWith("a") || lowerCaseStudent.endsWith("e")) {
    console.log(`- Welcome, ${student}!`);
  }
}