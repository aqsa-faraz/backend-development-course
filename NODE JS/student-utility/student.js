// Create student.js with a function that receives a student's name and course and returns a formatted introduction.
function studentInfo(name, course){
    return `Name: ${name}\nCourse: ${course}`;
}

// In the same file, create a function that receives obtained marks and total marks and returns the percentage.
function percentage(marks, total){
    return (marks / total) * 100;
}

// Export both functions from student.js using CommonJS.
module.exports = {
    studentInfo,
    percentage
};