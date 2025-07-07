const students =["Alice","Ate","Bob", "Charlie"];
console.log("helllo lets take a roll call")

for (const student of students){
    if (student.startsWith("A") && student.endsWith("e")){
        console.log(`-Welocome , ${student}!`);
}

}
