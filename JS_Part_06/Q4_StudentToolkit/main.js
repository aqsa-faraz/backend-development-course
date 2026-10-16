//import totalMarks from "./studentTools";
import fullName, { totalMarks } from "./studentTools.js";

let firstName = "Hamza";
let lastName = "Khan";
const marks = [75, 68, 83, 77];

// In main.js, bring both functions in from studentTools.js and use them with sample student data

let total = totalMarks(...marks);

// displaying fullname
console.log("Name: ", fullName(firstName,lastName));

// displaying total marks
console.log(`Total Marks: ${total}`);
