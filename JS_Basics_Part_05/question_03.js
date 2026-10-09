const employee_data= [{name:'Ali', department:'IT', salary:80000},
{name:'Sara', department:'HR', salary:70000}, {name:'Ahmed', department:'IT', salary:95000}, {name:'Ayesha',
department:'Finance', salary:85000}];

// Employees who belong to the IT department
let it_dept_employees = employee_data.filter(employee => employee.department === 'IT');

console.log('IT Department Employees: ',it_dept_employees);

// First employee whose salary is greater than 90000
let salary_greater_90k = employee_data.find(employee => employee.salary > 90000);

console.log('First employee whose salary is greater than 90,000: ', salary_greater_90k);

// List containing only the employee names
const employee_names = employee_data.map(employee => employee.name);

console.log('List of employee names: ', employee_names);

// The total salary of all employees
let total_salary = employee_data.reduce((total, employee)=> total + employee.salary, 0);

console.log(`Total salary of all employees: ${total_salary}`);