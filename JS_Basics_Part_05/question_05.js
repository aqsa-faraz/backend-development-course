// Create a javascript object for a student
const student = {
    name: 'Hamza Ali',
    class: 'Grade 10',
    chemistry: 68,
    mathematics: 84,
    urdu: 65,
    english: 78,
    // Create a method inside the student object that calculates the student's total marks and percentage out of 400
    result: function() {
        // Use this inside the method to access the student's marks and other properties
        let total_marks = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total_marks/400)*100;
        return {
            total: total_marks,
            percent: percentage
        };
        
    }
}

// Display the student's name and class using appropriate property access.
console.log(`Name: ${student.name}, Class: ${student.class}`);
// Access at least one property using bracket notation
console.log(`Chemistry: ${student["chemistry"]}`);
// Call the method and display the student's name together with the calculated percentage
let student_percentage = student.result();
console.log(`${student.name} has got ${student_percentage.percent}% marks`);

// Create a second student object with the same type of method and call it as well to demonstrate reusability
const student_2 = {
    name: 'Anas Ali',
    class: 'Grade 10',
    chemistry: 78,
    mathematics: 86,
    urdu: 70,
    english: 68,
    result: function() {
        let total_marks = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = total_marks/400*100;
        return {
            total: total_marks,
            percent: percentage
        };   
    }
}

let student_2_result = student_2.result();

console.log(`${student_2.name} has got ${student_2_result.percent}% marks`);

// Remove one property from one of the student objects and display the final object
delete student_2.urdu;
// displaying the final object
console.log(student_2);