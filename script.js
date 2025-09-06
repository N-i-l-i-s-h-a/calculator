/*dom elements inside display screen of calculator*/
const res_dis = document.querySelector("#result");
const calc_dis = document.querySelector("#operation");

/*to store the operands that comes before and after clicking the arithmetic ops buttons*/
let operand1;
let operand2;
let operation;
let opPresent = false;

/*numerical button -> eventListener that displays the number*/
const disBtn = document.querySelectorAll('.dis');
for(const btn of disBtn){
    btn.addEventListener('click', function(event){
        calc_dis.innerText += (event.target).innerText;
    });
}

/*arithmetic button -> eventListener that initializes operand1*/
const arithBtn = document.querySelectorAll('#arith');
for(const btn of arithBtn){
    btn.addEventListener('click', function(event){
        if(!opPresent){
            operand1 = calc_dis.innerText;
            operation = btn.innerText;
            calc_dis.innerText += operation;
            opPresent = true;
        }
        else{
            compute();
        }
    })
}

function clearAll(){
    calc_dis.innerText = "";
}

function changeSign(){
    calc_dis.innerText = 0 - Number(calc_dis.innerText);
}

function evalPercentage(){
    calc_dis.innerText = Number(calc_dis.innerText) / 100;
}

function backspace(){
    let num = calc_dis.innerText;
    calc_dis.innerText = num.slice(0, -1);
}

function compute(){
    const expression = calc_dis.innerText;
    switch (operation) {
        case '+':
            operand2 = expression.slice(expression.indexOf('+') + 1);
            res_dis.innerText = Number(operand1) + Number(operand2);
            break;
        case '-':
            operand2 = expression.slice(expression.indexOf('-') + 1);
            res_dis.innerText = Number(operand1) - Number(operand2);
            break;
        case '÷':
            operand2 = expression.slice(expression.indexOf('÷') + 1);
            res_dis.innerText = Number(operand1) / Number(operand2);
            break;
        case 'x':
            operand2 = expression.slice(expression.indexOf('x') + 1);
            res_dis.innerText = Number(operand1) * Number(operand2);
            break;
        default:
            break;
    }
}