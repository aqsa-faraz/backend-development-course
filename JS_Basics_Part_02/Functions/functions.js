const function_1 = document.getElementById('function1');
const function_2 = document.getElementById('function2');
const function_3 = document.getElementById('function3');
let message = "Welcome to JavaScript"
function greet(){
    console.log(message);
    function_1.innerText = message;
}

function greetUser(name){
    console.log("Welcome, "+name+"!");
    function_2.innerText = "Welcome, "+name+"!"
}

function addNumbers(num1, num2){
    return(num1+num2);
}

greet();
greetUser("Aqsa");
let sum = addNumbers(9,13);
console.log(sum);
function_3.innerText = sum;