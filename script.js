let currentOperand = '';
let previousOperand = '';
let operation = undefined;
const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const calcBtn = document.querySelector('.calculate');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.backspace');
const currentOperandText = document.querySelector('.current-operand');
const previousOperandText = document.querySelector('.previous-operand');

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand + number;
}

function operatorSelect(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        operate();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = ''
}

function calculate() {
    let result;
    switch (operation) {
        case '+':
            result = (Number(previousOperand) + Number(currentOperand));
            break;
        case '-':
            result = (Number(previousOperand) - Number(currentOperand));
            break;
        case '*':
            result =(Number(previousOperand) * Number(currentOperand));
            break;
        case '/':
            result = (Number(previousOperand) / Number(currentOperand));
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined; 
    previousOperand = '';
}

function getDisplayNum(num) {
    const strNum = num.toString();
    const intDigits = Number(strNum.split('.')[0]);
    const decimalDigits = strNum.split('.')[1];
    let intDisplay;
    if (isNaN(intDigits)) {
        intDisplay = '';
    } else {
        intDisplay = intDigits.toLocaleString('en', {
            maximumFractionDigits: 0
        })
    }
    if (decimalDigits != null) {
        return `${intDisplay}.${decimalDigits}`
    } else {
        return intDisplay;
    }
}

function updateDisplay() {
    currentOperandText.textContent = getDisplayNum(currentOperand);
    if (operation != null) {
        previousOperandText.innerText = `${getDisplayNum(previousOperand)} ${operation}`
    }
}

numBtn.forEach((input) => { input.addEventListener('click', () => {
    appendNumber(input.value);
    updateDisplay();       
    })
})

operatorBtn.forEach((input) => { input.addEventListener('click', () => {
    operatorSelect(input.value);
    updateDisplay();   
    })
})

calcBtn.addEventListener('click', () => {
    calculate();
    updateDisplay();
})

clearBtn.addEventListener('click', () => {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
})
    
backBtn.addEventListener('click', () => {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
})




