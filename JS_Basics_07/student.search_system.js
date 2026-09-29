const students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// Check whether ayesha is present in the class
let ayeshaIsPresent = students.includes('Ayesha');
console.log(`Ayesha is present: ${ayeshaIsPresent}`);


// Find the position of the first occurrence of Sara
let first_occurence = students.indexOf('Sara') + 1;
console.log(`Position of the first occurrence of Sara is ${first_occurence}`);

// Find the position of the last occurrence of Sara
let last_occurrence = students.lastIndexOf('Sara') + 1;
console.log(`Position of the last occurrence of Sara is ${last_occurrence}`);

// Find the first student whose name starts with the letter A
let startWithA = students.find(myFunction);
console.log(`First student whose name starts with A is: ${startWithA}`);

// Find the position of the first student satisfying that condition
let positionOfFirstA = students.findIndex(myFunction) + 1;

function myFunction(value, index, array){
    return value.startsWith('A');
}

console.log(`Position of the first student whose name starts with A is: ${positionOfFirstA}`);

// Find the last student satisfying a chosen condition and determine that student's position

// chosen condition: Find the last student whose name ends with 'a'
let lastStudentEndsWithA = students.findLast(name => name.endsWith('a'));

console.log(`Last student whose name ends with A is: ${lastStudentEndsWithA}`);

// Determine that student's position
let positionOfLastStudent = students.findLastIndex(name => name.endsWith('a'));

console.log(`Position of last student whose name ends with A is: ${positionOfLastStudent + 1}`);
