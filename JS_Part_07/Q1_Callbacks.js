// Create a function named calculate() that accepts two numbers and a callback. Pass a callback that adds the numbers and displays the result.
function calculate(a, b, callback){
    callback(a, b);
}

function add(n1, n2){
    let sum = n1 + n2;
    console.log(`${n1} + ${n2} = ${sum}`);
}

calculate(5, 3, add);

// Create a function named calculateBill() that accepts three product prices and a callback. Use prices 200, 300, and 500; the expected total is 1000.

function calculateBill(p1, p2, p3, callback){
    callback(p1, p2, p3);
}

function totalBill(p1, p2, p3){
    let sum = p1 + p2 + p3;
    console.log(`Total bill: ${sum}`);
}

calculateBill(200, 300, 500, totalBill);

// Create withdrawMoney(amount, callback). Assume a starting balance of 10,000. After approximately two seconds, call the callback to display the remaining balance.

let balance = 10000;
function withdrawMoney(amount, callback){
   
    setTimeout(() => {
        balance -= amount;
        callback(balance);
    }, 2000);
}

function remainingBalance(amount){ 
    console.log(`Remaining Balance: ${amount}`);
}

withdrawMoney(3200, remainingBalance);

console.log("calculating remaining balance...");