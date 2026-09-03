// Learnings
// var -> declares a variable(not recommended). These can be redeclared.
// let -> declares a block variable. Cannot be redclared in the same scope.
// const -> declares a block constant

const pi = 3.14; // value of any const variable can not be altered

//The var keyword was used in all JavaScript code before 2015. Using var to declare variables is not recommended now

// Data Types
 // String -> used for character and text inputs
 let firstname = "Aqsa";
 let lastname = "Faraz";

 console.log("Name:",firstname, lastname);
 console.log("Type of name:",typeof firstname);

 // Number -> for numeric values(decimal/integers)
 let age = 23;
 let height = 5.2;

 console.log("Age:", age);
 console.log("Height:", height);

 console.log("Type of age:", typeof age,"\nType of height:", typeof height);

 //Boolean -> for true/false conditions
let isSingle = true;
console.log("Single:", isSingle);
console.log("Type of single status:", typeof isSingle);

 // Big Int -> for very large numeric exponential values
 //In order to create a BigInt, you need to append an 'n' to the end of the integer literal or use BigInt("1234567890123456")
const bigIntNumber = 12345678901234567890n; 

console.log("BigInt:", bigIntNumber);
console.log("Type of BigIntNumber:", typeof bigIntNumber)

// Null -> is a primitive value that represents the intentional absence of any object value
let student = null;

console.log("Student:", student);
console.log("Type of student:", typeof student);

// Object -> is a standalone entity that stores data in key-value pairs.

student = {firstName: "Aqsa", lastName: "Faraz"}; //Later in the program, an object can be assigned

console.log("Student Object:", student);


// Undefined -> When you create a variable using let or var but do not give it a value, JavaScript automatically initializes it as undefined
var user;
console.log("User",user); // Output: undefined
console.log("Type of user:",typeof user); // Output: "undefined"
//OR
// If you try to read a property on an object that does not exist, the engine returns 'undefined'.
const car = { brand: "Toyota" };
console.log("Car color:",car.color); // Output: undefined

// symbol -> Symbol is a unique and immutable primitive data type introduced in ES6 that is primarily used to create completely unique identifiers for object properties. Every time you call Symbol(), it returns a completely distinct value that will never conflict with any other symbol or string key.
const userId = Symbol("user identifier");

const user_info = {
  name: "Ali",
  [userId]: 12345 // Using the symbol as a unique key
};

// Accessing the property requires the original symbol reference
console.log("User ID:",user_info[userId]); // 12345
console.log("Type of User ID:", typeof userId)

// ARRAY
const fruits = ["Apple", "Banana", "Orange"]; // array of fruits

console.log("Fruits:", fruits);
console.log("Type of fruits is:", typeof fruits);