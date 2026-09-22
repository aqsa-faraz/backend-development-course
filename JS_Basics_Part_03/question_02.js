const students = ['Ali', 'Arwa', 'Umer', 'Aisha', 'Hareem'];

// displaying original array
console.log("Original Array:",students);

// using push() to add a student at the end, it returns the new array length
students.push('Sidra');

// after adding a new student using push()
console.log("after adding new student using push(): "+students)

// using pop() to remove the last student
console.log("Removed using pop(): "+students.pop());

// using unshift() to add a student at the beginning
students.unshift('Bareera');
//  displaying array after unshift()
console.log("after adding new student at the beginning using unshift(): "+students);

// using shift() to remove the first element
console.log("removing first student using shitf(): "+students.shift());

// final array
console.log("Final Array of Students: ", students);
console.log("Final length of students array:", students.length);