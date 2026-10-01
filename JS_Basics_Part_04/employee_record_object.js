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
console.log("Employee Record: ", employee_record);

// Displaying the final object data on the HTML page
const detailsDiv = document.getElementById('employee-details');
detailsDiv.innerHTML = `
            <p><span class="highlight">ID:</span> ${employee_record.employee_id}</p>
            <p><span class="highlight">First Name:</span> ${employee_record.firstname}</p>
            <p><span class="highlight">Department:</span> ${employee_record.department}</p>
            <p><span class="highlight">Designation:</span> ${employee_record.designation}</p>
            <p><span class="highlight">Salary:</span> Rs. ${employee_record.salary}</p>
            <p><span class="highlight">Age:</span> ${employee_record.age}</p>
        `;