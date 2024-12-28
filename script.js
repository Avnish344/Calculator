let displayValue = "";

function appendNumber(number) {
    displayValue += number; 
    updateDisplay();       
}



function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        alert('Invalid Input');
        clearDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}