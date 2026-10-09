const order_amount = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// Displaying original array
console.log(`Original Array: ${order_amount}`);

// the first order amount greater than 2000
let first_order_amount = order_amount.find(first_amount_greater_than_2000);

function first_amount_greater_than_2000(value){
    return value > 2000;
}

console.log(`First order amount greater than 2000: ${first_order_amount}`);

// separate list containing all orders greater than 1000
let orders_greater_than_1000 = order_amount.filter(ordersGreaterThan1000);

function ordersGreaterThan1000(value){
    return value > 1000;
}

console.log(`Orders greater than 1000: ${orders_greater_than_1000}`);

// the combined total of all order amounts using arrow function
let combined_total = order_amount.reduce((total, value)=> total+value, 0);

// function combinedTotalOfAllOrders(total, value){
//     return total + value;
// }

console.log(`Combined total of all order amounts: ${combined_total}`);
