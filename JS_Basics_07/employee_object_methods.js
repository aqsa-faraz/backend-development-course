// Extend the employee object from Question 4 by giving the employee actions it can perform
const employee_1 = {
    employee_id: '1003',
    firstname: 'Hamza',
    lastname: 'Khan',
    department: 'HR',
    designation: 'Manager',
    salary: 75000,

    // Create another method that returns a sentence containing the employee's ID and department
    details: function () {
        return `Employee no. ${this.employee_id} works in the ${this.department} department`;
    }

};

// Create a method that returns the employee's complete name
employee_1.fullname = function () {
    return this.firstname + " " + this.lastname;
}

// Call both methods and display their returned values
console.log("----Employee 1----");
console.log("Employee name: ", employee_1.fullname());
console.log("Info: ", employee_1.details());

// Create a second employee object with similar properties and methods
const employee_2 = {
    employee_id: '1007',
    firstname: 'Ibrahim',
    lastname: 'Usman',
    department: 'Engineering',
    designation: 'Software Engineer',
    salary: 175000,

    fullname: function () {
        return this.firstname + " " + this.lastname;
    },
    details: function () {
        return `Employee no. ${this.employee_id} works in the ${this.department} department`;
    }

};

console.log("----Employee 2----");
console.log("Employee Name: ", employee_2.fullname());
console.log("Info: ", employee_2.details());