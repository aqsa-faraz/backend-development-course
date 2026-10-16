const group_A = ["Ali", "Ahmed", "Hamza"];
const group_B = ["Sara", "Ayesha", "Laiba"];
const profile = { name: "Laiba", className: "Web Development", city: "Karachi" }

// Create a combined class list containing the students from both groups
const combined_list = [...group_A, ...group_B];
//const combined_list = group_A.concat(group_B);

console.log("Combined Groups: ",combined_list);

//  Create an independent copy of Group A. Add a new student to the copy and show that the original Group A has not changed
const copyOfGroupA = [...group_A];

copyOfGroupA.push("Umer");

console.log('Group A: ', group_A);
console.log('Copy of Group A: ', copyOfGroupA);

// Create an updated profile for Laiba in which the city is changed to "Lahore" while the original profile remains unchanged
const updatedprofile = {...profile, city: "Lahore"};

// Create another updated profile that keeps the existing details and adds a new property called email
const updateProfileWithEmail = {...profile, email: "laiba123@gmail.com"};

// Display the original data and updated data so the differences are clear
console.log('Original Profile: ', profile);
console.log('Profile with updated city: ', updatedprofile);
console.log('Profile with email: ', updateProfileWithEmail);