let firstNum = '';
let operator = '';
let secondNum = '';


// Basic functions to be called later in the application
function sum(firstNum, secondNum) {
    return (firstNum + secondNum);
}

function subtract(firstNum, secondNum) {
    return (firstNum - secondNum);
}

function divide(firstNum, secondNum) {
    if (secondNum === 0) {
        return 'lmao';
    } else {
        return (firstNum / secondNum)};
}

function multiply(firstNum, secondNum) {
    return (firstNum * secondNum);
}

function clear() {
    let firstNum = '';
    let operator = '';
    let secondNum = '';
}

function decimal() {

}

function percentage() {

}

function positiveNegative() {

}

function display() {

}

function operate(firstNum, operator, secondNum) {
    if (operator === '+') {
        return sum(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else {
        return 'lmao'
    }
}

console.log(operate(5, '', 3))