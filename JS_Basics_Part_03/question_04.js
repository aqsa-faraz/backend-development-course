// Create at least three variables: one array, one string, and one number.
let num = 25;
let firstname = "Ibrahim";
const vehicles = ['cars', 'motorcycle', 'truck'];

// Use Array.isArray() to check each variable and display the results.
console.log(num, 'isArray', Array.isArray(num));
console.log(firstname, 'isArray', Array.isArray(firstname));
console.log(vehicles, 'isArray', Array.isArray(vehicles));

// Create an arrow function named showArray that accepts an array and displays it using console.log().
const showArray = (arr) => console.log("Show Array:",arr);
const city = ['Karachi', 'Lahore', 'Peshawar', 'Quetta'];
showArray(city);

// Create another simple arrow function that accepts one value and displays that value.
const showValue = (val) => console.log('Show Value():',val);

showValue("Hello World");
showValue(5);