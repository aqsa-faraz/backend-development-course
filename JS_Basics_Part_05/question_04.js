// Create the inventory as a Map
const inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// inventory.set("apples", 500);
// inventory.set("bananas", 300);
// inventory.set("oranges", 200);

// Add a new product to the inventory
inventory.set("kiwi", 600);

// The quantity of one existing product changes. Update the stored quantity.
inventory.set("oranges", 400);

// Retrieve and display the quantity of a specific product
console.log('Quantity of Bananas: ', inventory.get("bananas"));

// Check whether a particular product exists in the inventory and display the result
let item_isPresent = inventory.has("oranges") ? "Yes" : "No";
console.log('Are there oranges in the inventory?',item_isPresent);

// Remove one product from the inventory
inventory.delete("apples");

// Display the current number of product entries
console.log(`Current Number of Product Entries: ${inventory.size}`);

// Display all product names and all quantities
console.log("Product Names\n",inventory.keys());
console.log("Quantities\n",inventory.values());

// Use a Map iteration technique to print each product and quantity in a readable format
inventory.forEach((quantity, product) => console.log(`Product: ${product} | Quantity: ${quantity}`));

// Finally, empty the inventory and display its final size.
inventory.clear();
console.log(`Inventory size: ${inventory.size}`)