let displayValue = '';
let buttonValue = '';
let runningTotal = '';
let operator = '';
const buttonBox = document.querySelector('.button-container');
const inputNumber = document.querySelector('.input-number');

function clearAll() {
    displayValue = '';
    buttonValue = '';
    runningTotal = '';
    operator = '';
}

function updateDisplay() {
    document.getElementById('display').setAttribute('value', displayValue);
}

function calculate() { 
    switch (operator) {
        case '÷':
            runningTotal /= displayValue;
            break;
        case '×':
            runningTotal *= displayValue;
            break;
        case '-':
            runningTotal -= displayValue;
            break;
        case '+':
            runningTotal = (parseFloat(runningTotal)+parseFloat(displayValue));
            break;
    }
}

function calculator() {
    
}

inputNumber.addEventListener('keyup', (e) => {
    buttonValue = e.key;
    console.log(`You pressed the '${buttonValue}' key`);
});

buttonBox.addEventListener("click", function(event) {
    buttonValue  = event.target.innerText;
    console.log(`You clicked on button ${buttonValue}`);
        if (isNaN(buttonValue) == false) {
            if (displayValue == false) {displayValue = buttonValue;
            } else {
                displayValue += buttonValue;
            }
        } else if (buttonValue == '←') {
            displayValue = displayValue.slice(0,-1);

        } else if (buttonValue == 'C') {
            clearAll();
        } else if (buttonValue == '=') {
            calculate();
            operator = '';
            displayValue = runningTotal;
        } else { 
            if (runningTotal == false) {
                runningTotal = displayValue;
                displayValue = '';

            } else {
            calculate();
            displayValue = '';

            }
            operator = buttonValue;
        }
    updateDisplay();
    console.log(`running total: ${runningTotal}`);
    console.log(`operator: ${operator}`);
});