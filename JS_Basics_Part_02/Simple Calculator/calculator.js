const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');

// Operators
const add = document.getElementById('add');
const subtract = document.getElementById('sub');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
// Answer
const ans = document.getElementById('result');

// addition
add.addEventListener('click', () => {
    // to bypass manual type conversion(parseInt()), used the native .valueAsNumber property
    let result = operand1.valueAsNumber + operand2.valueAsNumber;
    ans.innerText = result;
})

subtract.addEventListener('click', () => {
    let result = parseInt(operand1.value) - parseInt(operand2.value);
    ans.innerText = result;
})

multiply.addEventListener('click', () => {
    let result = operand1.valueAsNumber * operand2.valueAsNumber;
    ans.innerText = result;
})

divide.addEventListener('click', () => {
    if (operand2.valueAsNumber === 0) {
        ans.innerHTML = '<strong>Cannot divide by zero</strong>'
    } else {
        let result = operand1.valueAsNumber / operand2.valueAsNumber;
        ans.innerText = result;
    }
})