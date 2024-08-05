const calc = document.querySelector('.calculation');
let heading = document.querySelector('.display h1');
let numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('.clear');


    numbers.forEach(function(e){
        e.addEventListener('click', ()=>{
            heading.textContent += e.textContent;
        })
    })
clear.addEventListener('click', ()=>{
    heading.textContent = ''
})
    calc.addEventListener('click', ()=>{
        heading.textContent = eval(heading.textContent)
    })