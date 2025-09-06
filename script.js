const calc_dis = document.querySelector("#operation");
/*numerical button -> eventListener that displays the number*/
const disBtn = document.querySelectorAll('.dis');
for(const btn of disBtn){
    btn.addEventListener('click', function(event){
        calc_dis.innerText += (event.target).innerText;
    });
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