const fruits = ["Apple", "Mango", "Orange", "Grapes", "Banana"];

// using .length property to display array length
console.log("array length: "+fruits.length);

// using toString() to convert the array into a string
console.log("Array as string: "+fruits.toString());

// using .at to access array elements
console.log("fruit at 2: "+fruits.at(2));
console.log("fruit at 4: "+fruits.at(4));

// using join() to display the each element on a new line separated by a \n 
console.log("used join() to display each element on a new line:\n"+fruits.join("\n"));