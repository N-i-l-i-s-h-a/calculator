const calc_dis = document.querySelector("#operation");
/*numerical button -> eventListener that displays the number*/
const button = document.querySelectorAll('#num');
for(const btn of button){
    btn.addEventListener('click', function(event){
        calc_dis.innerText += (event.target).innerText;
        calc_dis.classList.add('emphasized');
    });
}