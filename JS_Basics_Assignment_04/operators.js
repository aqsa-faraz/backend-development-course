// Arithmetic Operators

let num1 = 4;
let num2 = 3;

console.log(num1,' + ',num2," = ",num1+num2);
console.log(num1," - ",num2," = ",num1-num2);
console.log(num1," * ",num2," = ",num1*num2);
console.log(num1," / ",num2," = ",num1/num2);
console.log(num1," % ",num2," = ",num1%num2);
console.log(num1," ++ "," is ",num1++);
console.log(num2,"--"," is ",num2--);

console.log("++",num1," is ",++num1);
console.log("--",num2," is ",--num2);

// Assignment Operators
let score = 10;
console.log("Initial value (=):", score); // 10

// Addition assignment
score += 5; // Same as: score = score + 5
console.log("After += 5:", score);

// Subtraction assignment
score -= 3; // Same as: score = score - 3
console.log("After -= 3:", score);

// Multiplication assignment
score *= 2; // Same as: score = score * 2
console.log("After *= 2:", score);

// Division assignment
score /= 4; // Same as: score = score / 4
console.log("After /= 4:", score);



// Comaprison Operators
let a = 10;
let b = "10";
console.log("Initial value of a is ",a+" and b is ",b); 

// Equal to (checks value only)
let isEqual = (a == b); 
console.log("10==\"10\":", isEqual); 

// Strictly equal to (checks value and data type)
let isStrictEqual = (a === b); 
console.log("10===\"10\":", isStrictEqual);

// Not equal to (checks value only)
let isNotEqual = (a != b); 
console.log("10!=\"10\":", isNotEqual);

// Strictly not equal to (checks value or data type)
let isStrictNotEqual = (a !== b); 
console.log("10!==\"10\":", isEqual);

// Greater than
let isGreater = (a > 5);
console.log("10 > 5:", isGreater);

// Less than
let isLess = (a < 20); 
console.log("10 < 20:", isLess);

// Greater than or equal to
let isGreaterOrEqual = (a >= 10); 
console.log("10 >= 10:", isGreaterOrEqual);

// Less than or equal to
let isLessOrEqual = (a <= 9); 
console.log("10 <= 9:", isLessOrEqual);