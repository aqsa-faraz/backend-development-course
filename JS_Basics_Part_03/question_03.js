const fruits = ['Apple', 'Banana', 'Kiwi', 'Orange', 'Guava'];
const veggies = ['Carrot', 'Potato', 'Onion'];

// Merge two arrays
const food = fruits.concat(veggies);

// Original arrays
console.log('Fruits:',fruits);
console.log('Vegetables:',veggies);

// concatenated array
console.log("fruits + vegetables:", food);

// Use slice() to create a new array containing a selected portion of the original array.
// Extract from index 2 up to (but not including) index 5
const slicedArray = fruits.slice(2,5);
// displaying sliced array
console.log('Sliced Array:', slicedArray);

// using splice() to remove at least one element
const splicedItem = fruits.splice(1, 1);

console.log("Spliced Item:",splicedItem);
console.log("Array after splicing one item:",fruits);

// Using splice() again to add at least one element at a specific position

fruits.splice(1,0, 'Mango');

console.log('fruits after adding one item using splice():', fruits);

// Using the delete operator to delete one array element using its index
delete veggies[1];

// after deleting an element using delete operator
console.log('Veggies[] length after deleting item:', veggies.length);

console.log('Veggies Array after deleting item:', veggies);
