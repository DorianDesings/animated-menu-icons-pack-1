const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
const menu5 = document.getElementById('menu5');
const menu6 = document.getElementById('menu6');

menu1.addEventListener('click', ()=>{
    menu1.firstElementChild.classList.toggle('icon-menu__bar--simple');
})

menu2.addEventListener('click', ()=>{
    menu2.firstElementChild.classList.toggle('icon-menu__bar--left-arrow');
})

menu3.addEventListener('click', ()=>{
    menu3.firstElementChild.classList.toggle('icon-menu__bar--right-arrow');
})

menu4.addEventListener('click', ()=>{
    menu4.firstElementChild.classList.toggle('icon-menu__bar--compress');
})

menu5.addEventListener('click', ()=>{
    menu5.firstElementChild.classList.toggle('icon-menu__bar--rotate90');
})

menu6.addEventListener('click', ()=>{
    menu6.firstElementChild.classList.toggle('icon-menu__bar--plus');
})
