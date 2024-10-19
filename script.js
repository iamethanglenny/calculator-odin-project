let currentValue = '';
let operator = '';
let storedValue = '';
let isNewValue = false;

// Basic functions to be called later in the application
function sum(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function divide(a, b) {
    if (b === 0) {
        return 'lmao';
    } else {
        return (a / b)};
}

function multiply(firstNum, secondNum) {
    return (firstNum * secondNum);
}

let displayContent = document.getElementById("display");
let displayValue = '';

function addToDisplay(value) {
    if (displayValue.length <= 8) {
        displayValue += value;
        displayContent.innerText = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    firstNum = '';
    operator = '';
    secondNum = '';
    isSecondNum = false;
    displayContent.innerText = '0';
}

function decimal() {
    if (!displayValue.includes('.')) {
        if (displayValue === '0') {
            displayValue === '0.';
        } else {
            displayValue += '.';
        }
        displayContent.innerText = displayValue;
    }
}

function percentage() {
    if (displayValue === '') return;
    const numberValue = parseFloat(displayValue);
    displayValue = (numberValue / 100).toFixed(9).toString();
    displayContent.innerText = displayValue;
}

function positiveNegative() {
    if (displayValue === '') return;
    const numberValue = parseFloat(displayValue);
    displayValue = (numberValue * -1).toString();
    displayContent.innerText = displayValue;
}

function operate(firstNum, operator, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);

    if (operator === '+') {
        return sum(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else {
        return 'error';
    }
}

function selectOperator(op) {
    if (!isSecondNum) {
        firstNum = displayValue;
        operator = op;
        displayValue = '';
        isSecondNum = true;
    }
}

function calculate() {
    if (isSecondNum && displayValue !== '') {
        secondNum = displayValue;
        const result = operate(firstNum, operator, secondNum);
        displayContent.innerText = result.toString();
        isSecondNum = false;
    }
}