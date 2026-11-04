const student = require("./student");

const studentInfo = student.studentInfo("Ali", "Web Development");

const percentage = student.percentage(425, 500);

console.log("---STUDENT INFO---");
console.log("------------------");
console.log(studentInfo);
// console.log("----------------");
console.log(`Percentage: ${percentage}%`);
console.log("----------------");

console.log(`Node version: ${process.version}`);

