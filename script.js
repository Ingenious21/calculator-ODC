document.addEventListener('DOMContentLoaded', function () {
    const calculatorScreen = document.getElementById('calculator-screen');
    const keys = document.querySelectorAll('button');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';
    let isOperatorPressed = false;

    keys.forEach(key => {
        key.addEventListener('click', function (e) {
            const keyValue = e.target.value;
            if (keyValue === 'clear') {
                currentInput = '0';
                previousInput = '';
                operator = '';
                updateScreen(currentInput);
                return;
            }

            if (keyValue === '=') {
                if (previousInput && currentInput && operator) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    operator = '';
                    previousInput = '';
                    updateScreen(currentInput);
                }
                return;
            }

            if (isOperator(keyValue)) {
                if (!isOperatorPressed) {
                    operator = keyValue;
                    previousInput = currentInput;
                    currentInput = '0';
                    isOperatorPressed = true;
                } else {
                    if (previousInput && currentInput) {
                        currentInput = calculate(previousInput, currentInput, operator);
                        operator = keyValue;
                        previousInput = currentInput;
                        currentInput = '0';
                    }
                }
                return;
            }

            if (keyValue === '+/-') {
                currentInput = (parseFloat(currentInput) * -1).toString();
                updateScreen(currentInput);
                return;
            }

            if (keyValue === '%') {
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateScreen(currentInput);
                return;
            }

            if (currentInput === '0' && keyValue !== '.') {
                currentInput = keyValue;
            } else {
                currentInput += keyValue;
            }
            updateScreen(currentInput);
            isOperatorPressed = false;
        });
    });

    function updateScreen(value) {
        calculatorScreen.textContent = value;
    }

    function calculate(firstValue, secondValue, operator) {
        const first = Number(firstValue);
        const second = Number(secondValue);
        if (operator === '+') return (first + second).toString();
        if (operator === '-') return (first - second).toString();
        if (operator === '*') return (first * second).toString();
        if (operator === '/') return (first / second).toString();
        return secondValue;
    }

    function isOperator(value) {
        return value === '+' || value === '-' || value === '*' || value === '/';
    }
    
    const copyrightElement = document.getElementById('copyright');
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© Nehemiah ${currentYear}`;
});
