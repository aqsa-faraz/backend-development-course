const profile = {
    name: "Sara Ahmed",
    age: 19,
    department: "Software Engineering",
    address:
    {
        city: "Karachi",
        country: "Pakistan"
    }
};

// Extract the student's name and age into variables
let {name, age} = profile;

// Store the department in a local variable named program, while keeping the original property name unchanged in the object
let {department: program} = profile;

// Extract the city and country from the address information
let {address:{city, country}} = profile;

// The API may sometimes omit the student phone number. Prepare a phone variable that uses "Not provided" when no phone value is available
let {phone = "Not provided"} = profile;

// All these values can be extracted in a single statement also
// let {name, age, department:program, address: {city, country}, phone = "Not provided"} = profile;

// Display a short profile summary containing the student's name, program, city, and phone value
console.log(`Profile Summary\n---------------\nStudent's name: ${name}\nProgram: ${program}\nCity: ${city}\nPhone: ${phone}`);
