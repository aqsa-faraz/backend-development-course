const record_01 = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Extract the book ID, book title, and price into separate variables
let id = record_01[0];
let title = record_01[1];
let price = record_01[3];

// Ignore the category value when extracting the details in one statement.
let [bk_ID, bk_title, , bk_price] = record_01;

// The system later receives a shorter record: ["BK-105", "Learning ES6"]. Prepare a category variable that uses
const record_02 = ["BK-105", "Learning ES6"];

// "General" when the record does not include a category.
let [_id, _title, _category = "General"] = record_02;

console.log('Original Record: ', record_01);
// Display the extracted details in a readable sentence using a template literal
console.log(`Book Record\n-----------\nid: ${bk_ID}\ntitle: ${bk_title}\nprice: ${price}`);
console.log('Original Record (short)',record_02);

console.log(`The book "${_title}" (id: ${_id}) belongs to the "${_category}" category.`);


