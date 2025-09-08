/*dom elements inside display screen of calculator*/
const res_dis = document.querySelector("#result");
const calc_dis = document.querySelector("#operation");

/*to store the operands that comes before and after clicking the arithmetic ops buttons*/
let operand1;
let operand2;
let operation;

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
    operation = btn.innerText;
    btn.addEventListener('click', function(event){
        if(res_dis.innerText === ''){
            operand1 = calc_dis.innerText;
            calc_dis.innerText += operation;
        }
        else{
            operand1 = res_dis.innerText;
            calc_dis.style.fontSize = '40px';
            calc_dis.innerText = operand1;
            res_dis.innerText = "";
            calc_dis.innerText += operation;
        }
    })
}

function clearAll(){
    calc_dis.innerText = "";
    res_dis.innerText = "";
    calc_dis.style.fontSize = '40px';
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