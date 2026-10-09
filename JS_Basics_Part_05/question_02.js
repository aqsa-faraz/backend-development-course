const students_marks = [45, 78, 92, 61, 88, 54, 73,
95];

// new list in which every student's mark is increased by 5 for a practice assessment
let increasedByFive = students_marks.map((marks)=>marks+5);

// list containing only students whose marks are 70 or above
let marks_above_70 = students_marks.filter(marksAbove70);

function marksAbove70(marks){
    return marks >= 70;
}

// the first mark greater than 90
let mark_greater_than_90 = students_marks.find((mark) => mark>90);

// the total of all marks in the original list
let total_of_marks = students_marks.reduce((total, marks) => total + marks);

// Original List
console.log(`Original List: ${students_marks}`);

console.log(`Student's marks list increased by 5: ${increasedByFive}`);

console.log(`List of Students whose marks are 70 or above: ${marks_above_70}`);

console.log(`First mark greater than 90: ${mark_greater_than_90}`);

console.log(`Total of all marks: ${total_of_marks}`);

