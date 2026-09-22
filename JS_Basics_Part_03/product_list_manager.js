// Create an array containing at least 5 product names
const products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];

// Display the number of products using length
console.log('length:',products.length);

// Display the first and last product using at()
console.log("First product:", products.at(0));
console.log("Last product:", products.at(products.length-1));

// Add a product using push()
products.push('Charger');
console.log("Pushed one product:", products);

// Add another product using unshift()
products.unshift('Speakers');
console.log('Unshifted one product:', products);

// Remove the last product using pop()
console.log('Popped out product:',products.pop());

// Remove the first product using shift()
console.log('Removed '+ products.shift()+ ' using shift():'+ products);

// Create a second product array and combine it using concat()
const products_2 = ['Battery', 'Microphhone'];

const all_products = products.concat(products_2);

// Use slice() to create a smaller list
const sliced_products = all_products.slice(1, 4);

// Use splice() to replace or remove a product
all_products.splice(2, 1, 'Tablet');

// Use join() to display the final product list as a string
console.log('products display using join(): ',all_products.join("|"));

// Use an arrow function to display the final array
const displayArray = (arr) => arr.forEach((element,index) => {
    console.log(`product[${index}]: `, element)
});

displayArray(all_products);

// Use Array.isArray() to verify the final product list is an array
console.log('Products is an array? ',Array.isArray(all_products));