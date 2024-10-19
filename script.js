let currentValue = ''; // Holds the current input value
let storedValue = '';  // Holds the accumulated result
let operator = '';     // Holds the current operator
let isNewValue = true; // Indicates if we are starting a new number input

// Basic functions to perform arithmetic
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return 'lmao';
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

let displayContent = document.getElementById("display");

// Helper to update display
function updateDisplay(value) {
    displayContent.innerText = value;
}

// Handle number input
function addToDisplay(value) {
    if (isNewValue) {
        currentValue = value;
        isNewValue = false;
    } else {
        currentValue += value;
    }
    updateDisplay(currentValue);
}

// Clear display and reset
function clearDisplay() {
    currentValue = '';
    storedValue = '';
    operator = '';
    isNewValue = true;
    updateDisplay('0');
}

// Perform operation
function operate(storedValue, operator, currentValue) {
    const a = parseFloat(storedValue);
    const b = parseFloat(currentValue);
    
    switch (operator) {
        case '+':
            return sum(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return b; // Return the current number if no operator
    }
}

// Handle operator press
function selectOperator(op) {
    if (storedValue === '') {
        // First operation, store the current value
        storedValue = currentValue;
    } else if (!isNewValue) {
        // Perform the previous operation
        storedValue = operate(storedValue, operator, currentValue).toString();
        updateDisplay(storedValue);
    }

    operator = op;
    isNewValue = true; // Ready for the next number input
}

// Handle equals press for final calculation
function calculate() {
    if (storedValue !== '' && operator !== '') {
        storedValue = operate(storedValue, operator, currentValue).toString();
        updateDisplay(storedValue);
        operator = '';
        isNewValue = true; // Allow starting a new calculation
    }
}

function percentage() {
    if (currentValue === '') return;
    const numberValue = parseFloat(currentValue);
    currentValue = (numberValue / 100).toString();
    updateDisplay(currentValue);
}

function positiveNegative() {
    if (currentValue === '') return;
    const numberValue = parseFloat(currentValue);
    currentValue = (numberValue * -1).toString();
    updateDisplay(currentValue);
}

function decimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay(currentValue);
    }
}

// Handle keydown events
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // If the key is a number, add it to the display
    if (!isNaN(key)) { // Check if the key is a number
        addToDisplay(key);
    }

    // Handle operators
    if (key === '+') {
        selectOperator('+');
    } else if (key === '-') {
        selectOperator('-');
    } else if (key === '*') {
        selectOperator('*');
    } else if (key === '/') {
        selectOperator('/');
    }

    // Handle decimal point
    if (key === '.') {
        decimal();
    }

    // Handle Enter key for calculation
    if (key === 'Enter') {
        calculate();
    }

    // Handle Backspace for clearing the current input
    if (key === 'Backspace') {
        clearDisplay();
    }
});
