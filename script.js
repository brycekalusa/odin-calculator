let operator;
let result = 0;
let calculation;
const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const calcBtn = document.querySelector('.calculate');
const display = document.querySelector('#display');
const total = document.querySelector('#total');

function addNums() {
    result = result + calculation;
    return result;
}

function subNums() {
    result = result - calculation;
    return result;
}

function multiplyNums() {
    result = result * calculation;
    return result;
}

function divideNums() {
    result = result / calculation;
    return result;
}

function operate() {
    if (operator === '+') {
        return addNums();
    } else if (operator === '-') {
        return subNums();
    } else if (operator === '*') {
        return multiplyNums();
    } else if (operator === '/') {
        return divideNums();
    }
}

numBtn.forEach((input) => { input.addEventListener('click', () => {
        display.textContent = Number(input.value);
        if (result === 0) {
        result = Number(input.value);
        } else {
        calculation = Number(input.value);
        }
    })
})

operatorBtn.forEach((input) => { input.addEventListener('click', () => {
        display.textContent = input.value;
        if (input.value === '+') {
        operator = '+';
        } else if (input.value === '-') {
        operator = '-';
        } else if (input.value === '*') {
        operator = '*';
        } else if (input.value === '/') {
        operator = '/';
        }
    })
})

calcBtn.addEventListener('click', () => {
    total.textContent = operate();
})



