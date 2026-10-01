const product_prices = [1200, 450, 3000, 750, 1500, 250];

// Show the original list and a reversed version
document.getElementById('original-list').textContent = product_prices.join(', ');
const reversed_prices = [...product_prices].reverse();
document.getElementById('reversed-list').textContent = reversed_prices.join(', ');
console.log(`Original Price List: ${product_prices}`);
console.log(`Reversed Price List: ${product_prices.reverse()}`);


// Display the prices from lowest to highest
const ascending_sort = product_prices.sort(function(a,b){return a - b});

console.log(`From Lowest to Highest: ${ascending_sort}`);
document.getElementById('ascending-list').textContent = ascending_sort.join(', ');


// Display the prices from highest to lowest
const descending_sort = product_prices.sort(function(a,b){return b - a});

console.log(`From Highest to Lowest: ${descending_sort}`);

document.getElementById('descending-list').textContent = descending_sort.join(', ');


// Generate a random ordering of the prices for a promotional display
const random_sort = product_prices.sort(function(){return 0.5 - Math.random()});

console.log(`Random ordering of the prices: ${random_sort}`);

document.getElementById('random-list').textContent = random_sort.join(', ');

