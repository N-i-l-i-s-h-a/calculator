/*dom elements inside display screen of calculator*/
const res_dis = document.querySelector("#result"); //result is displayed
const calc_dis = document.querySelector("#operation"); //expressions are made 

/*to store the operands that comes before and after clicking the arithmetic ops buttons*/
let operand1;
let operand2;
let operation;

/*numerical button -> eventListener that displays the number*/
const numBtn = document.querySelectorAll('.dis');
for(const btn of numBtn){
    btn.addEventListener('click', function(event){
        if(res_dis.innerText != ''){
            calc_dis.style.fontSize = '40px';
            calc_dis.innerText = res_dis.innerText + (event.target).innerText;
        }
        else{
            calc_dis.innerText += (event.target).innerText;
        }
    });
}

/*arithmetic button -> eventListener that initializes operand1*/
const arithBtn = document.querySelectorAll('#arith');
for (const btn of arithBtn) {
    btn.addEventListener('click', function() {
        const clickedOperator = btn.innerText;
        let currentExpression = calc_dis.innerText;
        if (res_dis.innerText !== "") {
            resetDisWithRes();
            calc_dis.innerText += clickedOperator;
            operation = clickedOperator;
            return;
        }
        
        if (hasOperator(currentExpression)) {
            operation = findOperator(calc_dis.innerText);
            compute();
            resetDisWithRes();
            calc_dis.innerText += clickedOperator;
            operation = clickedOperator;
        } 
        else {
            operand1 = calc_dis.innerText; 
            calc_dis.innerText += clickedOperator;
            operation = clickedOperator;  
        }
    });
}

function hasOperator(textToCheck) {
    if (textToCheck.includes('+') || textToCheck.includes('x') || textToCheck.includes('÷')) {
        return true;
    }
    if (textToCheck.indexOf('-') > 0) {
        return true;
    }
    return false;
}

function findOperator(displayString) {
    if (displayString.includes('+')) return '+';
    if (displayString.includes('x')) return 'x';
    if (displayString.includes('÷')) return '÷';
    if (displayString.lastIndexOf('-') > 0) return '-';
    return null;
}

function clearAll(){
    calc_dis.innerText = "";
    res_dis.innerText = "";
    calc_dis.style.fontSize = '40px';
    operation = '';
    operand1 = '';
    operand2 = '';
}

function changeSign(){
    if(res_dis.innerText != ''){
        resetDisWithRes();
    }
    if(operation != ''){
        return;
    }
    calc_dis.innerText = 0 - Number(calc_dis.innerText);
}

function evalPercentage(){
    if(res_dis.innerText != ''){
        resetDisWithRes();
    }
    calc_dis.innerText = Number(calc_dis.innerText) / 100;
}

function backspace(){
    if(res_dis.innerText != ''){
        resetDisWithRes();
    }
    calc_dis.innerText = calc_dis.innerText.slice(0, -1);
        
}

function addDecimal() {
    const currentText = calc_dis.innerText;
    // If the display is empty, start the number with "0."
    if (currentText === "") {
        calc_dis.innerText = "0.";
        return;
    }
    //Prevent adding a dot after an operator
    const lastChar = currentText.slice(-1);
    const operators = ['+', '-', 'x', '÷'];
    if (operators.includes(lastChar)) {
        return;
    }
    // Allow only one dot per number (operand)
    let lastOperatorIndex = -1;
    for (const op of operators) {
        lastOperatorIndex = Math.max(lastOperatorIndex, currentText.lastIndexOf(op));
    }
    // The current number is the part of the string after the last operator.
    const currentNumberStr = currentText.slice(lastOperatorIndex + 1);
    // If the current number part already contains a '.', we can't add another one.
    if (currentNumberStr.includes('.')) {
        return; 
    }
    // If all checks pass, it's safe to add the decimal point
    calc_dis.innerText += '.';
}

function resetDisWithRes(){
    operand2 = '';
    operation = '';
    operand1 = res_dis.innerText;
    calc_dis.style.fontSize = '40px';
    calc_dis.innerText = operand1;
    res_dis.innerText = "";
}

function compute(){
    const expression = calc_dis.innerText;
    console.log(`${expression}`);
    calc_dis.style.fontSize = '20px';
    switch (operation) {
        case '+':
            operand2 = expression.slice(expression.indexOf('+') + 1);
            res_dis.innerText = Number(operand1) + Number(operand2);
            return res_dis;
            break;
        case '-':
            operand2 = expression.slice(expression.indexOf('-') + 1);
            res_dis.innerText = Number(operand1) - Number(operand2);
            break;
        case '÷':
            operand2 = expression.slice(expression.indexOf('÷') + 1);
            if (Number(operand2) === 0) {
                res_dis.innerText = "Error";
            } else {
                res_dis.innerText = Number(operand1) / Number(operand2);
            }
            break;
        case 'x':
            operand2 = expression.slice(expression.indexOf('x') + 1);
            res_dis.innerText = Number(operand1) * Number(operand2);
            break;
        default:
            break;
    }
}