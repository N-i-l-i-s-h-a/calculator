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
for(const btn of arithBtn){
    btn.addEventListener('click', function(event){
        operation = btn.innerText;
        if(res_dis.innerText === ""){
            operand1 = calc_dis.innerText;
            calc_dis.innerText += operation;
        }
        else{
            resetDisWithRes();
            calc_dis.innerText += operation;
        }
    })
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