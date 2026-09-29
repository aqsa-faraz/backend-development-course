// Create an employee record for a company using a JavaScript object.
const employee_record = {
    employee_id: '1003',
    firstname: 'Hamza',
    lastname: 'Khan',
    department: 'HR',
    designation: 'Manager',
    salary: 75000
};

// Display the first name and department using dot notation
console.log(`Name: ${employee_record.firstname}`);
console.log(`Department: ${employee_record.department}`);

// Display the designation and salary using bracket notation
console.log(`Designation: ${employee_record['designation']}`);
console.log(`Salary: ${employee_record['salary']}`);

// Add one new property after the object is created
employee_record.age = 32;

// Change the value of one existing property
employee_record.salary = 87000;

// Remove one property that is no longer required
delete employee_record.lastname;

// Display the final employee object using console.log()
console.log("Employee Record: ",employee_record);