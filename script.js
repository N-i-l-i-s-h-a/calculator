const calc_dis = document.querySelector("#operation");
/*numerical button -> eventListener that displays the number*/
const numBtn = document.querySelectorAll('#num');
for(const btn of numBtn){
    btn.addEventListener('click', function(event){
        calc_dis.innerText += (event.target).innerText;
    });
}

